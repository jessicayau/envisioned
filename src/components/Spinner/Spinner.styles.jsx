import styled from "styled-components";

export const SpinnerOverlay = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinnerContainer = styled.div`
    display: inline-block;
    width: 3.125rem;
    height: 3.125rem;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s linear infinite;
    -webkit-animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;
