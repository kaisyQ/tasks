import React from "react";

import { TaskContainer, Subtitle } from "./TaskStyles";

import Title from "../../Custom/Title/Title";

import { NavLink } from "react-router-dom";

import { ITask } from "../../../types/types";

import { getDateString } from "../../../helpers/date";

interface ITaskProps {
    task: ITask
}


const Task = ({ task } : ITaskProps) => {
    return (
        <>
            <TaskContainer>
                <NavLink to={`/task/${task.id}`}>
                    <Title>{ task.title }</Title>
                    <Subtitle>Создано : <span>{ getDateString(task.date) }</span></Subtitle>
                    <Subtitle>Приоритет : <span>{ task.priority }</span></Subtitle>
                    <Subtitle>
                        Отметки: 
                        {
                            !task.research && !task.design && !task.description ? 'no marks' : 
                            (task.research?' research ':'')+(task.design?'design ':' ')+(task.development?'dev':'')
                        }
                    </Subtitle>
                </NavLink>
            </TaskContainer>
        </>
    );
}

export default Task;