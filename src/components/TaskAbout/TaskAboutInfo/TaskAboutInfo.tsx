import React from "react";

import Button from "../../Custom/Button/Button";
import Input from "../../Custom/Input/Input";
import Title from "../../Custom/Title/Title";
import Textarea from "../../Custom/Textarea/Textarea";

import { TaskAboutBlock, InfoBlock } from "./TaskAboutInfoStyles";

import { NavLink } from "react-router-dom";

import { 
    createTask, setNewTaskDescription, 
    setNewTaskDesign, setNewTaskDevelopment, setNewTaskResearch, updateTask 
} from "../../../store/taskSlice/taskSlice";

import { ITask } from "../../../types/types";

import { getDateString } from "../../../helpers/date";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import { setNewTaskTitle } from "../../../store/taskSlice/taskSlice";

import { 
    selectCreatingTitle, 
    selectCreatingResearch,
    selectCreatingDesign,
    selectCreatingDev,
    selectCreatingDescription
} from "../../../store/taskSlice/selectors";


import Marks from "./Marks/Marks";
import PrioritySelect from "./Priority/PrioritySelect";

interface ITaskAboutInfoProps {
    task: ITask | null,
    editMode: boolean,
};

const TaskAboutInfo = ({ editMode, task } : ITaskAboutInfoProps) => {

    const dispatch = useAppDispatch();

    const creatingTitle = useAppSelector(state => selectCreatingTitle(state));
    const creatingDescription = useAppSelector(state => selectCreatingDescription(state));
    const creatingResearch = useAppSelector(state => selectCreatingResearch(state));
    const creatingDesign = useAppSelector(state => selectCreatingDesign(state));
    const creatingDev = useAppSelector(state => selectCreatingDev(state));


    const onSaveBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (task) {
            dispatch(updateTask(task.id));
            return;
        }
        dispatch(createTask());
    }

    const onTitleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewTaskTitle(ev.target.value));
    }

    const onDescriptionChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setNewTaskDescription(ev.target.value));
    }

    return (
        <> 
            <TaskAboutBlock>
                <Title>Название задачи</Title>
                {
                    !editMode ? 
                        <InfoBlock>{ task?.title }</InfoBlock> :
                    <Input value={creatingTitle} onChange={onTitleChange}/>     
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
                        <InfoBlock>{ task.priority }</InfoBlock> : <PrioritySelect items={['LOW','NORMAL','HIGH']}/>
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
                            actionCreator: setNewTaskResearch,
                            value:  creatingResearch
                            
                        },
                        {
                            title: 'design',
                            actionCreator: setNewTaskDesign,
                            value: creatingDesign
                        },
                        { 
                            title: 'development',
                            actionCreator: setNewTaskDevelopment,
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
                        : <Textarea value={creatingDescription} onChange={onDescriptionChange}/>
                }
            </TaskAboutBlock>
            {
                editMode ? <TaskAboutBlock>
                    <NavLink to={'/'}>
                        <Button onClick={onSaveBtnClick}>Сохранить</Button>
                    </NavLink>
                </TaskAboutBlock> : null
            }
        </>
    );
};

export default TaskAboutInfo;