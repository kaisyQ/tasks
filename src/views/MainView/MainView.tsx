import React from "react";

import Tasks from "../../components/Tasks/Tasks";
import Filter from "../../components/Filter/Filter";

import styled from "styled-components";

const MainView = () => {
    return (
        <>
            <Filter />
            <Tasks />
        </>
    );
};

export default MainView;