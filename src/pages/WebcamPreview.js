import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding-top: 69px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: realtive;
`;

const Title = styled.span`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 37px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #121212;
`;

const Guideline = styled.img`
  width: 495px;
  height: 541px;
  display: none;
`;

const VideoContainer = styled.div`
  margin: 42px 0;
`;

const CaptureButton = styled.button`
  background: #df843e;
  border-radius: 40px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 75px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  width: 188px;
  height: 102px;
  justify-content: center;
  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.2);
  border: 0;
`;

const InfoMessage = styled.span`
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e93e18;
  margin-top: 30px;
  ${(props) =>
    props.small &&
    `
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-top: 0;
    `}
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalBox = styled.div`
  background: #f6f6f6;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #121212;
  width: 506px;
  justify-content: center;
  padding: 33px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 28px;
  padding: 12px 0 21px 0;
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgba(18, 18, 18, 0.7);
  width: 160px;
  height: 54px;
  border: 1px solid rgba(18, 18, 18, 0.2);
  border-radius: 40px;
`;

const ProgressingModal = () => {
  return (
    <ModalContainer>
      <ModalBox>
        고객님의 최적화 UI를 탐색 중입니다. <br />
        잠시만 기다려주세요.
      </ModalBox>
    </ModalContainer>
  );
};

const ResultModal = () => {
  const navigate = useNavigate();
  return (
    <ModalContainer>
      <ModalBox>
        고객님의 최적화 UI는 <br />
        주문이 간편한 '간편모드'입니다.
        <br />
        <br />
        간편 모드를 사용하시겠습니까?
        <ButtonContainer>
          {/* TODO: Page Connect */}
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            예
          </Button>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            아니요
          </Button>
        </ButtonContainer>
        <InfoMessage small>
          간편모드 사용 시 일부 메뉴 선택에 제한이 있을 수 있습니다
        </InfoMessage>
      </ModalBox>
    </ModalContainer>
  );
};

const WebcamPreview = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayImageRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showProgressingModal, setProgressingShowModal] = useState(false);
  const [showResultModal, setResultShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const context = canvasElement.getContext('2d');

    const drawOverlay = () => {
      context.save();
      context.scale(-1, 1);
      context.drawImage(
        videoElement,
        -canvasElement.width,
        0,
        canvasElement.width,
        canvasElement.height,
      );
      context.restore();

      if (overlayImageRef.current) {
        context.drawImage(
          overlayImageRef.current,
          0,
          0,
          canvasElement.width,
          canvasElement.height,
        );
      }

      requestAnimationFrame(drawOverlay);
    };

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoElement.srcObject = stream;
        videoElement.play();
        drawOverlay();
      })
      .catch((error) => {
        console.error('Error accessing webcam:', error);
      });
  }, []);

  useEffect(() => {
    console.log(capturedImage);
  }, [capturedImage]);

  const captureImage = async () => {
    const canvasElement = canvasRef.current;
    const context = canvasElement.getContext('2d');
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasElement.width,
      canvasElement.height,
    );

    const image = canvasElement.toDataURL('image/png');
    setCapturedImage(image);
    setProgressingShowModal(true);
    // TODO: API Integration
    // const result = await fetch(API)
    // const result = 'senior';
    // // const result = "young"
    // if (result === 'young') {
    //   // TODO: Page Connect
    //   navigate('/');
    // } else if (result === 'senior') {
    //   setProgressingShowModal(false);
    //   setResultShowModal(true);
    // } else {
    //   // people not found
    // }
  };

  return (
    <Container>
      {showProgressingModal && ProgressingModal()}
      {showResultModal && ResultModal()}
      <Title>가이드라인에 맞춰 촬영해주세요</Title>
      <VideoContainer>
        <video
          ref={videoRef}
          width="495"
          height="541"
          style={{ display: 'none' }}
        />
        <canvas ref={canvasRef} width="495" height="541" />
        <Guideline
          ref={overlayImageRef}
          src={process.env.PUBLIC_URL + '/Images/Main/VideoGuideline.svg'}
          alt="video guide line"
          style={{ display: 'none' }}
        />
      </VideoContainer>
      <CaptureButton onClick={captureImage} disabled={capturedImage}>
        촬영
      </CaptureButton>
      <InfoMessage>
        UI 제공에 활용된 사진은 주문 완료 후 즉시 폐기됩니다.
      </InfoMessage>
    </Container>
  );
};

export default WebcamPreview;
