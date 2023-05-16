import styled from "styled-components";


export const AppContainer = styled.div`
    padding: 2rem;
    display: flex;
    column-gap: 4rem;

    @media only screen and (max-width: 576px){
        flex-direction: column;
        row-gap: 4rem;
    }
`;