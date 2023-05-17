import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { NavLink } from "react-router-dom";

import { TasksContainer } from "./TasksStyles";

import { increasePageCount } from "../../store/taskSlice/taskSlice";
import { selectFilteredTasks } from "../../store/taskSlice/selectors";

import Button from "../Custom/Button/Button";
import Task from "./Task/Task";

const Tasks = () => {
    
    const tasks = useAppSelector(state => selectFilteredTasks(state));

    const dispatch = useAppDispatch();

    const [isGetting, setIsGetting] = React.useState(true);

    React.useEffect(() => {

        const handleScroll = (ev: Event) => {
            const target = ev.target as Document;
            
            if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100) {
                setIsGetting(true)
            }   
        }
        
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    React.useEffect(() => {
        
        if(isGetting) {
            dispatch(increasePageCount());
            setIsGetting(false)
        }

    }, [isGetting]);

    return (
        <>
            <TasksContainer>
                <NavLink to={'/task'}>
                    <Button color="#1a50d9">Добавить задачу</Button>
                </NavLink>
                {
                    tasks.length === 0 ? 
                        <div>Нет соответствующих задач</div> :
                    tasks.map(task => <Task key={task.id} task={task} />)
                }
            </TasksContainer>
        </>
    );
}


export default Tasks;