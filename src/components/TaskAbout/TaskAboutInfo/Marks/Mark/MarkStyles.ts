import styled from "styled-components";

interface IMarkButtonProps {
    isColored: boolean
}

export const MarkContainer = styled.div`
`;

export const MarkButton = styled.button<IMarkButtonProps>`
    padding: .5rem;
    width: 100%;
    text-align: left;
    cursor: pointer;

    background-color: ${props => props.isColored ? ' #e50909' : '#fff'};
    color: ${props => props.isColored ? '#fff' : '#000'};
`;