import React from "react";
import styled from "styled-components";
import Order from "./Order";
import { TitleFont } from "../../components/style/font";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 49px;
    background: #fff;
    padding: 57px 48px 0 48px;
`;

const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 450px;
`;

export default function Orders() {
    return (
        <Container>
            <TitleFont>주문</TitleFont>
            <OrdersContainer>
                <Order/>
            </OrdersContainer>
        </Container>
    )
}