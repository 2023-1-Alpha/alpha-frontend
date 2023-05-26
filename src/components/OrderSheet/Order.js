import React from "react";
import styled from "styled-components";
import { ContentFontLarge } from "../style/font";
import Quantity from "../Common/Quantity";

const Container = styled.div`
    display: flex;
    gap: 32px;
    padding: 20px;
    border: 1px solid rgba(18, 18, 18, 0.1);
    border-radius: 20px;
`;

const OrderImg = styled.img`
    width: 70px;
    height: 65px;
`;

const OrderContent = styled.div`
    display: flex;
    flex-direction: column;

`;

const OrderInfo = styled.div`
    display: flex;
`;

const Price = styled(ContentFontLarge)`
    margin-left: 58px;
`;

const TrashCan = styled.img`
    width: 18px;
    height: 22px;
    margin-left: 21px;
`;

export default function Order() {
    return (
        <Container>
            <OrderImg src={"/Images/Main/BurgerSet1.svg"}/>
            <OrderContent>
                <OrderInfo>
                    <ContentFontLarge>치킨 크리스피 버거 세트</ContentFontLarge>
                    <Price>₩6200</Price>
                    <TrashCan src={"/Images/Main/trashCan.svg"}/>
                </OrderInfo>
                <Quantity mini={true}/>
            </OrderContent>

        </Container>
    )
}