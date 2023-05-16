import React from "react";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { MarkContainer, MarkButton } from "./MarkStyles";
import { useAppDispatch } from "../../../../../hooks/hooks";


interface IMark {
    title: string,
    actionCreator: ActionCreatorWithPayload<boolean>,
    value: boolean
}


const Mark = ({ title, actionCreator, value } : IMark) => {
    
    const dispatch = useAppDispatch();

    
    const onMarkClick = () => {
        dispatch(actionCreator(!value));       
    }

    return (
        <>
            <MarkContainer>
                <MarkButton isColored={value} onClick={onMarkClick}>{ title }</MarkButton>
            </MarkContainer>
        </>
    );
}

export default Mark;