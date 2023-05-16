import styled from "styled-components";


interface IButtonProps {
    color?: string,
};

export default styled.button<IButtonProps>`
    font: inherit;
    font-size: 1.6rem;
    
    padding: 1.5rem;

    border: 2px solid ${props => props.color ? props.color : '#e50909'};;

    cursor: pointer;

    :not(:hover) {
        background-color: ${props => props.color ? props.color : '#e50909'};
        color: #fff;
        border-radius: .5rem;
        transition: .2s ease-in-out;
    }

    :hover {
        background-color: #fff;
        color: ${props => props.color ? props.color : '#e50909'};
        transition: .2s ease-in-out;
        border-radius: 5rem;
    }

`;