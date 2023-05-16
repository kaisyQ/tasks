import React from "react";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { MarksContainer } from "./MarksStyles";

import Mark from "./Mark/Mark";


interface IMark {
    title: string,
    actionCreator: ActionCreatorWithPayload<boolean>,
    value: boolean
}

interface IMarksProps {
    marks: IMark[]
}


const Marks = ({ marks } : IMarksProps) => {
    

    return (
        <>
            <MarksContainer>
            {
                marks.map((mark, index) => <Mark key={index} {...mark} />)
            }
            </MarksContainer>
        </>
    );
}

export default Marks;