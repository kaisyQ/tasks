import React from "react";

import { useAppDispatch } from "../../../hooks/hooks";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { Wrapper, CheckboxLabel, RadioLabel, Input } from "./CheckboxStyles";

import Title from "../Title/Title";

import * as Icon from 'react-bootstrap-icons';

interface ICheckboxProps {
    type: 'radio' | 'checkbox'
    title?: string,
    checked: boolean,
    fixedValue: boolean | null,
    actionCreator: ActionCreatorWithPayload<boolean>
};


const Checkbox = (props: ICheckboxProps) => {
    
    const dispatch = useAppDispatch();
    
    const onWrapperClick = (ev: React.MouseEvent<HTMLElement>) => {
        dispatch(props.actionCreator(props.fixedValue !== null ? props.fixedValue : !props.checked));
    };

    return (
        <>
            <Wrapper>
                <div>
                    {
                        props.type === 'checkbox' ? 
                            
                            <CheckboxLabel checked={props.checked}>
                                { props.checked ? <Icon.Check2 color="#1a50d9" size={'2rem'} width={'100%'}/> : null }
                                <Input type="checkbox" onClick={onWrapperClick} />
                            </CheckboxLabel> :

                            <RadioLabel checked={props.checked}>
                                <Input type="radio" onClick={onWrapperClick} />
                            </RadioLabel>
                    }
                </div>
                {
                    props.title ? <Title>{ props.title }</Title> : null
                }
            </Wrapper> 
        </> 
    );
}


export default Checkbox
