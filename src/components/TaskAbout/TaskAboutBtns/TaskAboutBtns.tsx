import React from "react";

import { NavLink } from "react-router-dom";

import Button from "../../Custom/Button/Button";

import { TaskAboutBtnsContainer, BtnsWrapper } from './TaskAboutBtnsStyles';

import { useAppDispatch } from "../../../hooks/hooks";
import { deleteTask, setNewTaskDescription, setNewTaskDesign, setNewTaskDevelopment, setNewTaskResearch, setNewTaskTitle } from "../../../store/taskSlice/taskSlice";

import { ITask } from "../../../types/types";

interface ITaskAboutBtnsProps {
    task: ITask | null, 
    editMode: boolean,
    setEditMode: (value: React.SetStateAction<boolean>) => void
};

const TaskAboutBtns = ({ setEditMode, editMode, task } : ITaskAboutBtnsProps) => {
    
    const dispatch = useAppDispatch();
    
    const onEditBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (!task) return;
        
        dispatch(setNewTaskTitle(task.title));
        dispatch(setNewTaskDescription(task.description));
        dispatch(setNewTaskDesign(task.design));
        dispatch(setNewTaskResearch(task.research));
        dispatch(setNewTaskDevelopment(task.development));

        setEditMode(true);
    }
    
    const onBackBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (!task) return;
        
        dispatch(setNewTaskTitle(''));
        dispatch(setNewTaskDescription(''));
        dispatch(setNewTaskDesign(false));
        dispatch(setNewTaskResearch(false));
        dispatch(setNewTaskDevelopment(false));

    }

    const onDeleteTask = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (!task) return;
        
        dispatch(deleteTask(task.id));
    }

    return (
        <>
            <TaskAboutBtnsContainer>
                
                <BtnsWrapper>
                    <NavLink to={'/'}>
                        <Button onClick={onBackBtnClick}>Назад</Button>
                    </NavLink>
                    <Button onClick={onEditBtnClick}>Редактировать</Button>
                </BtnsWrapper>
                
                {
                    !editMode ? <NavLink to={'/'}>
                        <Button onClick={onDeleteTask}>Удалить</Button>
                    </NavLink> : null 
                }
            
            </TaskAboutBtnsContainer>       
        </>
    );
};

export default TaskAboutBtns;