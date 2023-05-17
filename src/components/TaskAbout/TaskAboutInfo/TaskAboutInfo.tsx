import React from "react";

import Button from "../../Custom/Button/Button";
import Input from "../../Custom/Input/Input";
import Title from "../../Custom/Title/Title";
import Textarea from "../../Custom/Textarea/Textarea";

import { TaskAboutBlock, InfoBlock } from "./TaskAboutInfoStyles";

import { NavLink } from "react-router-dom";

import { 
    createTask, setTempDescription, setTempDesign, setTempDev, setTempResearch, updateTask 
} from "../../../store/taskSlice/taskSlice";

import { ITask } from "../../../types/types";

import { PRIORITY_LOW, PRIORITY_NORMAL, PRIORITY_HIGH } from "../../../types/types";

import { getDateString } from "../../../helpers/date";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import { setTempTitle } from "../../../store/taskSlice/taskSlice";

import { 
    selectTempTitle, 
    selectTempResearch,
    selectTempDesign,
    selectTempDev,
    selectTempDescription
} from "../../../store/taskSlice/selectors";


import Marks from "./Marks/Marks";

import PrioritySelect from "./Priority/PrioritySelect";

interface ITaskAboutInfoProps {
    task: ITask | null,
    editMode: boolean,
}

const TaskAboutInfo = ({ editMode, task } : ITaskAboutInfoProps) => {

    const dispatch = useAppDispatch();

    const creatingTitle = useAppSelector(state => selectTempTitle(state));
    const creatingDescription = useAppSelector(state => selectTempDescription(state));
    const creatingResearch = useAppSelector(state => selectTempResearch(state));
    const creatingDesign = useAppSelector(state => selectTempDesign(state));
    const creatingDev = useAppSelector(state => selectTempDev(state));


    const onSaveBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (task) {
            dispatch(updateTask(task.id));
            return;
        }
        dispatch(createTask());
    }

    const onTitleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTempTitle(ev.target.value));
    }

    const onDescriptionChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setTempDescription(ev.target.value));
    }

    return (
        <> 
            <TaskAboutBlock>
                <Title>Название задачи</Title>
                {
                    !editMode && task? 
                        <InfoBlock>{ task.title }</InfoBlock> :
                    <Input placeholder="Enter title" value={creatingTitle} onChange={onTitleChange}/>     
                }
            </TaskAboutBlock>
            
            <TaskAboutBlock>
            {
                !editMode && task? <>
                    <Title>Дата создания</Title>
                    <InfoBlock>{ getDateString(task.date) }</InfoBlock>
                </> : null
            }
            </TaskAboutBlock>
            
            <TaskAboutBlock>
                <Title>Приоритет</Title>
                {
                    !editMode && task ?  
                        <InfoBlock>{ task.priority }</InfoBlock> : 
                    <PrioritySelect items={[PRIORITY_LOW,PRIORITY_NORMAL, PRIORITY_HIGH]}/>
                }
            </TaskAboutBlock> 
            
            <TaskAboutBlock>
                <Title>Отметки</Title>
                {
                    task && !editMode ? <>
                        <InfoBlock>
                        {
                            !task.research && !task.design && !task.description ? 'no marks' : 
                            (task.research?'research ':'')+(task.design?'design ':' ')+(task.development?'dev':'')
                        }
                        </InfoBlock> 
                    </> : <Marks marks={[
                        {
                            title: 'research',
                            actionCreator: setTempResearch,
                            value:  creatingResearch
                            
                        },
                        {
                            title: 'design',
                            actionCreator: setTempDesign,
                            value: creatingDesign
                        },
                        { 
                            title: 'development',
                            actionCreator: setTempDev,
                            value: creatingDev
                        }
                    ]}
                    />
                }
            </TaskAboutBlock>

            <TaskAboutBlock>
                <Title>Описание</Title>
                {
                    !editMode ?  
                        task && task.description ? 
                            <InfoBlock>{ task.description }</InfoBlock> : 
                            <InfoBlock hint={true}>this taks dont have a description!</InfoBlock>
                        : <Textarea placeholder="Enter description" value={creatingDescription} onChange={onDescriptionChange}/>
                }
            </TaskAboutBlock>
            {
                editMode ? <TaskAboutBlock>
                    <NavLink to={'/'}>
                        <Button color="#1a50d9" onClick={onSaveBtnClick}>Сохранить</Button>
                    </NavLink>
                </TaskAboutBlock> : null
            }
        </>
    );
};

export default TaskAboutInfo;