import styled from "styled-components";


interface IButtonProps {
    background?: string,
    color?: string,
};

export default styled.button<IButtonProps>`
    font: inherit;
    font-size: 1.6rem;
    
    padding: 1.5rem 2rem;
    
    background: ${props => props.background ? props.background : '#000'};
    color: ${props => props.color ? props.color : '#fff'};

    border-radius: .5rem;

    cursor: pointer;
`;