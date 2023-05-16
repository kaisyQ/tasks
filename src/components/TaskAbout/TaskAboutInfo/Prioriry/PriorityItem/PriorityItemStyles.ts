import styled from "styled-components";

interface IPriorityItemProps {
    show: boolean
}

interface IPriorityBtnProps {
    show: boolean,
    arrow: boolean
}

export const PriorityItemContainer = styled.li<IPriorityItemProps>`
    display: ${props => props.show ? 'block' : 'none'};
`;

export const PriorityItemBlock = styled.button<IPriorityBtnProps>`
    padding: 1rem;
    cursor: pointer;
    width: 100%;
    text-align: left;

    background-color: #000;
    color: #fff;

    position: relative;
    ::after {
        content: '';
        position: absolute;
        display: ${props => props.arrow ? 'block' : 'none'};
        right: 2rem;
        top: 50%;

        height: 1rem;
        width: 1rem;

        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;

        transform: ${props => props.show ? 'rotate(135deg)' : 'rotate(-45deg)' } translate(50%, -50%);
    }
`;