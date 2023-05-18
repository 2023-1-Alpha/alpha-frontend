import React, { useEffect, useRef, useState } from 'react';

const WebcamPreview = () => {
  const videoRef = useRef(null);
  const capturedImageRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    let stream = null;
    const video = videoRef.current;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    const stopCamera = () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };

    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const capturedImageUrl = canvas.toDataURL('image/png');
    setCapturedImage(capturedImageUrl);

    // Optional: Save captured image to a reference for downloading or further processing
    capturedImageRef.current = capturedImageUrl;

    console.log(typeof(capturedImage))
    console.log((capturedImage))
  };

  return (
    <div>
      <h2>Webcam Preview</h2>
      <video ref={videoRef} autoPlay />
      <button onClick={handleCapture}>Capture</button>
      {capturedImage && (
        <div>
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default WebcamPreview;
