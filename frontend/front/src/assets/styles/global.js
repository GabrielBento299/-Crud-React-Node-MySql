import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
     * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #f2f2f2;
  }
`;

export const Container = styled.div`
        width: 100%;
        max-width: 1200px;
        margin-top: 1.2rem;

        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
`;
