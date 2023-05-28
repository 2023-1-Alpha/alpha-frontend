import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { SubTitleFont, SubTitleFontColor } from '../../style/font';
import Quantity from '../../Common/Quantity';
import { useState } from 'react';
import YellowButton from '../../Button/YellowButton';
import GrayBorderButton from '../../Button/GrayBorderButton';
import { useRecoilState } from 'recoil';
import { ordersAtom } from '../../../recoil/Order/atoms';

const ModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '20px',
    width: '425px',
    height: '600px',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
    border: '0',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuImg = styled.img`
  height: 240px;
  margin-bottom: 21px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
`;

const FoodName = styled(SubTitleFont)`
  border-bottom: 4px solid #df843e;
  margin-bottom: 17px;
`;

export default function SingleModal(props) {
  Modal.setAppElement('#root');
  const [nums, setNums] = useState(1);

  return (
    props?.item && (
      <Modal
        isOpen={props.modalIsOpen}
        style={ModalStyles}
        onRequestClose={props.closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <Container>
          <MenuImg
            src={`${process.env.REACT_APP_SERVER_URL}/images/${props.item._id}.png`}
          />
          <FoodName>{props.menuName}</FoodName>
          <SubTitleFontColor>₩{props.menuPrice}</SubTitleFontColor>
          <BtnContainer>
            <Quantity nums={nums} setNums={setNums} />
            <YellowButton
              name={'장바구니 추가'}
              onClick={() => props.UpdateSingleOrder(nums)}
            />
            <GrayBorderButton
              name={'취소'}
              onClick={() => {
                props.closeModal();
              }}
            />
          </BtnContainer>
        </Container>
      </Modal>
    )
  );
}
