import React from "react";

import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";

import { PriorityItemContainer, PriorityItemBlock } from "./PriorityItemStyles";

import { Priority } from "../../../../../types/types";

import { setTempPriority } from "../../../../../store/taskSlice/taskSlice";
import { selectTempPriority } from "../../../../../store/taskSlice/selectors";

export interface IPriorityItemProps {
    value: Priority,
    showAll: boolean,
    setShowAll: (value: React.SetStateAction<boolean>) => void
}

const PriorityItem = ({ value, showAll, setShowAll } : IPriorityItemProps) => {
    
    const dispatch = useAppDispatch();

    const creatingPriority = useAppSelector(state => selectTempPriority(state));
    
    const onItemClick = (ev : React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setTempPriority(value));
        setShowAll(prev => !prev);
    }

    return (
        <>
            <PriorityItemContainer show={creatingPriority === value || showAll} >
                <PriorityItemBlock show={showAll} arrow={creatingPriority === value} onClick={onItemClick}>{ value }</PriorityItemBlock>
            </PriorityItemContainer>
        </>
    );
}

export default PriorityItem;