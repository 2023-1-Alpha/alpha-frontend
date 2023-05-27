import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubTitleFont } from '../../style/font';
import WhiteRoundedButton from '../../Button/WhiteRoundedButton';
import GrayBorderButton from '../../Button/GrayBorderButton';
import Modal from 'react-modal';

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '20px',
    width: '375px',
    transform: 'translate(-50%, -50%)',
    padding: '51px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    border: '0',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function WaitingCameraModal(props) {
  Modal.setAppElement('#root');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 실행할 함수
      navigate('/seniorHome');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Modal
      isOpen={props.modalIsOpen}
      style={ModalStyles}
      onRequestClose={props.closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <Container>
        <SubTitleFont>사용자별 최적화 UI를 제공하기 위한</SubTitleFont>
        <SubTitleFont>카메라 대기 중입니다.</SubTitleFont>
        <SubTitleFont>
          <br />
          잠시만 기다려주세요.
        </SubTitleFont>
      </Container>
    </Modal>
  );
}
