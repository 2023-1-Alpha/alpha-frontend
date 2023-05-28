import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { ordersAtom } from '../../../recoil/Order/atoms';
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
    height: '375px',
    transform: 'translate(-50%, -50%)',
    padding: '65px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    border: '0',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 60px;
  margin-bottom: 36px;
`;

export default function SetModal(props) {
  Modal.setAppElement('#root');
  const navigate = useNavigate();

  return (
    <Modal
      isOpen={props.modalIsOpen}
      style={ModalStyles}
      onRequestClose={props.closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <Container>
        <SubTitleFont>세트로 주문하시겠습니까?</SubTitleFont>
        <BtnContainer>
          <WhiteRoundedButton
            imgSrc={'Images/Main/setBurger.svg'}
            text={'세트 선택'}
            small={true}
            onClick={() => {
              navigate('/selectDetail', {
                state: {
                  menuName: props.menuName,
                  menuPrice: props.menuPrice,
                },
              });
            }}
          />
          {/* 장바구니 추가 */}
          <WhiteRoundedButton
            imgSrc={'Images/Main/onlyBurger.svg'}
            text={'단품 선택'}
            small={true}
            onClick={() => props.UpdateSingleOrder(1)}
          />
        </BtnContainer>
        <GrayBorderButton
          name={'취소'}
          onClick={() => {
            props.closeModal();
          }}
        />
      </Container>
    </Modal>
  );
}
