import React from "react";

import { useAppSelector } from "../../hooks/hooks";

import { NavLink } from "react-router-dom";

import { TasksContainer } from "./TasksStyles";

import Button from "../Custom/Button/Button";

import Task from "./Task/Task";

import { selectWithMarks } from "../../store/taskSlice/selectors";

const Tasks = () => {

    const tasks = useAppSelector((state) => selectWithMarks(state))

    return (
        <>
            <TasksContainer>
                <div>
                    <NavLink to={'/task'}>
                        <Button background="#1a50d9">Добавить задачу</Button>
                    </NavLink>
                </div>
                {
                    tasks.length === 0 ? 
                        <div>Нет соответствующих задач</div> :
                    tasks.map(task => <Task key={task.id} {...task} />)
                }
            </TasksContainer>
        </>
    );
}


export default Tasks;