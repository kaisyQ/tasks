import styled from "styled-components";

interface IMarkButtonProps {
    isBlack: boolean
}

export const MarkContainer = styled.div`
`;

export const MarkButton = styled.button<IMarkButtonProps>`
    padding: .5rem;
    width: 100%;
    text-align: left;
    cursor: pointer;

    background-color: ${props => props.isBlack ? '#000' : '#fff'};
    color: ${props => props.isBlack ? '#fff' : '#000'};
`;