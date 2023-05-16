import React from "react";

import { PrioritySelectContainer } from "./PriorityStyles";

import PriorityItem from "./PriorityItem/PriorityItem";

import { Priority } from "../../../../types/types";

interface IPriorityProps {
    items: Priority[]
}

const PrioritySelect = ({ items } : IPriorityProps) => {
    
    const [ showAll, setShowAll ] = React.useState(false);
    return (
        <>
            <PrioritySelectContainer>
            { 
                items.map((item, index) => <PriorityItem setShowAll={setShowAll} showAll={showAll} key={index} value={item}/>)
            }
            </PrioritySelectContainer>
        </>
    );
}

export default PrioritySelect;