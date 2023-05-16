import styled from "styled-components";

interface ILabelProps {
    checked : boolean
}

export const Wrapper = styled.div`
    display: flex;
    column-gap: 1rem;
`;


export const CheckboxLabel = styled.label<ILabelProps>`
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 2.3rem;
    height: 2.3rem;
    
    border: .2rem solid #1a50d9;
    border-radius: .5rem;

    position: relative;

    cursor: pointer;
`;

export const RadioLabel = styled.label<ILabelProps>`
    
    display: inline-block;
    
    width: 2.3rem;
    height: 2.3rem;
    
    border: .2rem solid #1a50d9;
    border-radius: 50%;

    position: relative;

    cursor: pointer;
    
    ::before {
        content: '';
        
        display: ${props => props.checked ? "block" : "none"};

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        width: 1rem;
        height: 1rem;

        border-radius: 50%;

        background-color: #1a50d9;
    }
`;

export const Input = styled.input`
    display: none;
`