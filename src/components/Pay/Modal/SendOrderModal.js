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

export default function SendOrderModal(props) {
  Modal.setAppElement('#root');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 실행할 함수
      navigate('/seniorHome');
    }, 5000);
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
        <SubTitleFont>주문 전송 중입니다.</SubTitleFont>
        <SubTitleFont>잠시만 기다려주세요.</SubTitleFont>
      </Container>
    </Modal>
  );
}
