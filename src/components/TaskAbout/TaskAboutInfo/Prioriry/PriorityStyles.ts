import styled from "styled-components";

export const PrioritySelectContainer = styled.ul`
    
    padding: .5rem;
    border: 2px solid #29db4f;
    
    position: relative;
    ::after {
        content: '';
        position: absolute;
        right: 2rem;
        top: 50%;

        height: 1rem;
        width: 1rem;

        border-left: 1px solid #000;
        border-bottom: 1px solid #000;

        transform: rotate(-45deg) translate(50%, -50%);
    }
`;