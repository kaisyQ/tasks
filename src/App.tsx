import React from "react";

import { Routes, Route } from "react-router-dom";

import { AppContainer } from "./AppStyles";

import MainView from "./views/MainView/MainView";
import TaskView from "./views/TaskView/TaskView";

const App = () => {
    
    return (
        <>
            <AppContainer>
                <Routes>
                    {                
                        ["/", "/tasks/"].map(route => <Route path={route} element={ <MainView /> } />)
                    }
                    <Route path="/task/:id?" element={ <TaskView />} />
                </Routes>
            </AppContainer>
        </>
    );
}

export default App