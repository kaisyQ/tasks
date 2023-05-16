import React from "react";

import { TaskContainer, Subtitle } from "./TaskStyles";

import Title from "../../Custom/Title/Title";

import { ITask } from "../../../store/taskSlice/taskSlice";
import { NavLink } from "react-router-dom";


const Task = (props : ITask) => {
    return (
        <>
            <TaskContainer>
                <NavLink to={`/task/${props.id}`}>
                    <Title>{ props.title }</Title>
                    <Subtitle>Создано : <span>{ props.date.toString() }</span></Subtitle>
                    <Subtitle>Приоритет : <span>{ props.priority }</span></Subtitle>
                    <Subtitle>
                        Отметки:
                        {
                            props.design ? <span>design</span> : null
                        }
                        {
                            props.development ? <span>development</span> : null
                        } 
                        {
                            props.research ? <span>research</span> : null
                        }
                    </Subtitle>
                </NavLink>
            </TaskContainer>
        </>
    );
}

export default Task;