/* eslint-disable no-unneeded-ternary */
import styled from 'styled-components';

export const Input = styled.input`
        padding: 0 .7rem;
        border: 1px solid #bbb;
        border-radius: 7px;
        height: 40px;

        ${({ modal }) => (modal ? 'width: auto' : 'width: 170px')};
         width: ${({ width }) => (width ? width : 'auto')};

`;
