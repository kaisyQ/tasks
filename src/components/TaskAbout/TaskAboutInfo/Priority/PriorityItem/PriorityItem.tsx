import React from "react";

import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";

import { PriorityItemContainer, PriorityItemBlock } from "./PriorityItemStyles";

import { Priority } from "../../../../../types/types";

import { setNewTaskPriority } from "../../../../../store/taskSlice/taskSlice";
import { selectCreatingPriority } from "../../../../../store/taskSlice/selectors";

export interface IPriorityItemProps {
    value: Priority,
    showAll: boolean,
    setShowAll: (value: React.SetStateAction<boolean>) => void
}

const PriorityItem = ({ value, showAll, setShowAll } : IPriorityItemProps) => {
    
    const dispatch = useAppDispatch();

    const creatingPriority = useAppSelector(state => selectCreatingPriority(state));
    
    const onItemClick = (ev : React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setNewTaskPriority(value));
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