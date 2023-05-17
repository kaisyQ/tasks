import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import { PRIORITY_LOW, PRIORITY_NORMAL, PRIORITY_HIGH } from "../../types/types";

import { TASKS_TO_SHOW } from "../../constants/constants";


export const selectTasks = (state: RootState) => state.tasks.items;

export const selectCurrentTaskId = (state: RootState) => state.tasks.currentTaskId;

export const selectSortByNew = (state: RootState) => state.tasks.sortByNew;

export const selectLowPriority = (state: RootState) => state.tasks.lowPriority;

export const selectNormalPriority = (state: RootState) => state.tasks.normalPriority;

export const selectHighPriority = (state: RootState) => state.tasks.highPriority;

export const selectResearch = (state: RootState) => state.tasks.research;

export const selectDesign = (state: RootState) => state.tasks.design;

export const selectDevelopment = (state: RootState) => state.tasks.development;

export const selectTempTitle = (state: RootState) => state.tasks.tempTitle;

export const selectTempPriority = (state: RootState) => state.tasks.tempPriority;

export const selectTempResearch = (state: RootState) => state.tasks.tempResearch;

export const selectTempDesign = (state: RootState) => state.tasks.tempDesign;

export const selectTempDev = (state: RootState) => state.tasks.tempDev;

export const selectTempDescription = (state: RootState) => state.tasks.tempDescription;

export const selectPageCount = (state: RootState) => state.tasks.pageCount;

export const selectTaskById = createSelector([selectTasks, selectCurrentTaskId], (tasks, taskId) => {
    
    if(!taskId) return null;
    
    const task = tasks.find(task => task.id === taskId);

    if(!task) return null;

    return task;
})

export const selectSortedTasks =  createSelector([selectTasks, selectSortByNew], (tasks, sortByNew) => {

    if (!sortByNew) {
        return [...tasks].sort((firstTask, secondTask) => firstTask.date.getTime() - secondTask.date.getTime())
    }

    return [...tasks].sort((firstTask, secondTask) => secondTask.date.getTime() - firstTask.date.getTime());
})
 
export const selectFilteredByPriorityTasks = createSelector(
    [selectSortedTasks, selectLowPriority, selectNormalPriority, selectHighPriority], 
    
    (tasks, lowPriority, normalPriority, highPriority) => {
        return tasks.filter(task => 
            (task.priority === PRIORITY_LOW) && lowPriority || 
            (task.priority === PRIORITY_NORMAL) && normalPriority || 
            (task.priority === PRIORITY_HIGH) && highPriority
        )
    }
)

export const selectWithMarksTasks = createSelector(
    [selectFilteredByPriorityTasks, selectResearch, selectDesign, selectDevelopment], 
    

    (tasks, research, design, dev) => {

        if (!research && !design && !dev) {
            return tasks.filter(task => !task.research && !task.design && !task.development);
        }

        return tasks.filter(task => 
            (task.research && research) || 
            (task.design &&  design) || 
            (task.development && dev)
        );
    }
)

export const selectFilteredTasks = createSelector([selectWithMarksTasks, selectPageCount], (tasks, multiplier) => {
    return tasks.slice(0, TASKS_TO_SHOW*multiplier);
})
