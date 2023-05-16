import styled from "styled-components";

export const TaskAboutBtnsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 330px){
        flex-direction: column;
        row-gap: 2rem;
    }
`;

export const BtnsWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
`;