import React from "react";

import { NavLink } from "react-router-dom";

import Button from "../../Custom/Button/Button";

import { TaskAboutBtnsContainer, BtnsWrapper } from './TaskAboutBtnsStyles';

import { useAppDispatch } from "../../../hooks/hooks";
import { 
    deleteTask, 
    setTempDescription, 
    setTempDesign, 
    setTempDev, 
    setTempResearch, 
    setTempTitle 
} from "../../../store/taskSlice/taskSlice";

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
        
        dispatch(setTempTitle(task.title));
        dispatch(setTempDescription(task.description));
        dispatch(setTempDesign(task.design));
        dispatch(setTempResearch(task.research));
        dispatch(setTempDev(task.development));

        setEditMode(true);
    }
    
    const onBackBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (!task) return;
        
        dispatch(setTempTitle(''));
        dispatch(setTempDescription(''));
        dispatch(setTempDesign(false));
        dispatch(setTempResearch(false));
        dispatch(setTempDev(false));

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