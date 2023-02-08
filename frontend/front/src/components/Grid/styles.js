/* eslint-disable no-unneeded-ternary */
import styled from 'styled-components';

export const Table = styled.table`
        width: 95%;
        background-color: #fff;
        padding: 2rem;
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 7px;
        max-width: 1120px;
        margin: 20px auto;
 `;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
        text-align: start;
        border-bottom: inset;
        padding-bottom: .5rem;

        @media (max-width: 500px) {
            ${({ onlyWeb }) => onlyWeb && 'display: none'};
        }
`;

export const Td = styled.td`
        padding-top: 15px;
        text-align: ${({ alignCenter }) => (alignCenter ? 'center' : 'start')};
        width: ${({ width }) => (width ? width : 'auto')};

        @media (max-width: 500px) {
            ${({ onlyWeb }) => onlyWeb && 'display: none'};
        }

        svg {
            cursor: pointer;
        }

`;
