import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { SubTitleFont, SubTitleFontColor } from "../../style/font";
import Quantity from "../../Common/Quantity";
import { useState } from "react";
import YellowButton from "../../Button/YellowButton";
import GrayBorderButton from "../../Button/GrayBorderButton";

const ModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '20px',
      width: '425px',
      height: '600px',
      transform:'translate(-50%, -50%)',
      padding: '40px',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
      border: '0',
    }
  }

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
    display:flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 48px;
`;

const FoodName = styled(SubTitleFont)`
  border-bottom: 4px solid #DF843E;
  margin-bottom: 17px;
`;

export default function SingleModal (props) {
    Modal.setAppElement('#root');
    const [nums, setNums] = useState(1);
    return (
        <Modal isOpen={props.modalIsOpen} style={ModalStyles} onRequestClose={props.closeModal} shouldCloseOnOverlayClick={true}>
        <Container>
            <MenuImg src={"Images/Main/icecream.svg"}/>
            <FoodName>소프트 콘</FoodName>
            <SubTitleFontColor>₩1500</SubTitleFontColor>
            <BtnContainer>
                <Quantity nums={nums} setNums={setNums}/>
                <YellowButton name={"장바구니 추가"}/>
                <GrayBorderButton name={"취소"}/>
            </BtnContainer>
        </Container>
    </Modal>
    )
}