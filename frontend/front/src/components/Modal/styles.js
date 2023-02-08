import styled from 'styled-components';

export const Overlay = styled.div`
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2.5px);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        border: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
`;

export const Container = styled.div`
        background-color: #fff;
        max-width: 750px;
        width: 100%;
        color: #333;
        border-radius: 7px;
        padding: 2rem;

        .items {
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                outline: none;
                border: none;
                background: none;
                cursor: pointer;

                svg {
                    font-size: 1.7rem;
                }
            }
        }
`;

export const FormContainer = styled.form`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 7px;
        margin-top: 1rem;
`;

export const Button = styled.button`
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        background-color: #2c73d2;
        color: white;
        height: 42px;
`;
