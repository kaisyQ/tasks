import React from "react";

import { useAppSelector } from "../../hooks/hooks";

import { 
    setSortBy, 
    setLowPriority, 
    setNormalPriority, 
    setHighPriority,
    setResearch,
    setDesign,
    setDevelopment
} from "../../store/taskSlice/taskSlice";

import { 
    selectSortByNew, 
    selectLowPriority, 
    selectNormalPriority, 
    selectHighPriority,
    selectDesign,
    selectResearch,
    selectDevelopment

} from "../../store/taskSlice/selectors";

import { FilterContainer, FilterSection, SectionContainer } from "./FilterStyles";

import Title from "../Custom/Title/Title";

import Checkbox from "../Custom/Checkbox/Checkbox";


const Filter = () => {

    const sortByNew = useAppSelector(state => selectSortByNew(state));
    
    const lowPriority = useAppSelector(state => selectLowPriority(state));
    const normalPriority = useAppSelector(state => selectNormalPriority(state));
    const highPriority = useAppSelector(state => selectHighPriority(state));

    const research = useAppSelector(state => selectResearch(state));
    const design = useAppSelector(state => selectDesign(state));
    const development = useAppSelector(state => selectDevelopment(state));

    return (
        <>
            <FilterContainer>
                <SectionContainer>
                    <FilterSection>
                        <Title>Сортировка</Title>
                        <Checkbox 
                            type="radio"
                            title="Новые"
                            checked={sortByNew} 
                            actionCreator={setSortBy} 
                            fixedValue={true}
                        />
                        <Checkbox 
                            type="radio"
                            title="Старые"
                            checked={!sortByNew} 
                            actionCreator={setSortBy} 
                            fixedValue={false}
                        />
                    </FilterSection>
                </SectionContainer>

                <SectionContainer>
                    
                    <FilterSection>
                        <Title>Приоритет</Title>
                        <Checkbox 
                            type="checkbox"
                            title="Low"
                            checked={lowPriority} 
                            actionCreator={setLowPriority} 
                            fixedValue={null}
                        />
                        <Checkbox 
                            type="checkbox"
                            title="Normal"
                            checked={normalPriority} 
                            actionCreator={setNormalPriority}
                            fixedValue={null} 
                        />
                        <Checkbox 
                            type="checkbox"
                            title="High"
                            checked={highPriority} 
                            actionCreator={setHighPriority} 
                            fixedValue={null}
                        />
                    </FilterSection>

                    <FilterSection>
                        <Title>Отметка</Title>
                        <Checkbox 
                            type="checkbox"
                            title="Research"
                            checked={research} 
                            actionCreator={setResearch} 
                            fixedValue={null}
                        />
                        <Checkbox 
                            type="checkbox"
                            title="Design"
                            checked={design} 
                            actionCreator={setDesign} 
                            fixedValue={null}
                        />
                        <Checkbox 
                            type="checkbox"
                            title="Development"
                            checked={development} 
                            actionCreator={setDevelopment}
                            fixedValue={null} 
                        />
                    </FilterSection>

                </SectionContainer>
            </FilterContainer>
        </>
    );
}

export default Filter;