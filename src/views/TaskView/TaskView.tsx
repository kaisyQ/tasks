import React from "react";

import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

import { setCurrentTaskId } from "../../store/taskSlice/taskSlice";

import { selectTaskById } from "../../store/taskSlice/selectors";

import { TaskViewContainer } from './TaskViewStyles';

import TaskAboutBtns from "../../components/TaskAbout/TaskAboutBtns/TaskAboutBtns";
import TaskAboutInfo from "../../components/TaskAbout/TaskAboutInfo/TaskAboutInfo";


const TaskView = () => {

    const dispatch = useAppDispatch();
    
    const { id } = useParams();

    const [ editMode, setEditMode ] = React.useState(true);

    React.useEffect(() => {
        
        if (!id) {
            dispatch(setCurrentTaskId(null));
            return;
        }

        dispatch(setCurrentTaskId(parseInt(id)));
        setEditMode(false);

    }, [id, setEditMode])

    const task = useAppSelector((state) => selectTaskById(state));
    
    return (
        <>
            <TaskViewContainer>
                <TaskAboutBtns setEditMode={setEditMode} editMode={editMode} task={task}/>
                <TaskAboutInfo editMode={editMode} task={task} />
            </TaskViewContainer>
        </>
    );
};

export default TaskView;