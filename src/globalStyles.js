import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        font-familiy: 'Montserrat', sans-serif;
        height: 100%;
        width: 100%;
    }
    `;

export const Header1 = styled.h1`
    font-size: 40px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 45px;
`;
export const Button = styled.button``

export default GlobalStyle