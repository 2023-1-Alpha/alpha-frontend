import { createGlobalStyle } from "styled-components";
import IBMPlexSansBold from "./fonts/IBMPlexSansKR-Bold.woff";
import IBMPlexSansSemiBold from "./fonts/IBMPlexSansKR-SemiBold.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'IBMPlexSansBold';
        font-style: normal;
        src: url(${IBMPlexSansBold}) format('truetype');
    }

    @font-face {
        font-family: 'IBMPlexSansSemiBold';
        font-style: normal;
        src: url(${IBMPlexSansSemiBold}) format('truetype');
    }

    body {
        font-family: 'IBMPlexSansSemiBold';
    }
`;