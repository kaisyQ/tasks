import styled from "styled-components";

interface IInfoBlockProps {
    hint?: boolean
}

export const TaskAboutBlock = styled.div`
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

export const InfoBlock = styled.p<IInfoBlockProps>`
    color: ${props => props.hint ? 'red' : '#000'};
    text-decoration: ${props => props.hint ? 'underline' : 'none'};
`;
