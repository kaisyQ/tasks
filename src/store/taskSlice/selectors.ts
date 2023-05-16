import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const selectCurrentTaskId = (state: RootState) => state.tasks.currentTaskId;

export const selectSortByNew = (state: RootState) => state.tasks.sortByNew;

export const selectLowPriority = (state: RootState) => state.tasks.lowPriority;

export const selectNormalPriority = (state: RootState) => state.tasks.normalPriority;

export const selectHighPriority = (state: RootState) => state.tasks.highPriority;

export const selectResearch = (state: RootState) => state.tasks.research;

export const selectDesign = (state: RootState) => state.tasks.design;

export const selectDevelopment = (state: RootState) => state.tasks.development;

export const selectCreatingTitle = (state: RootState) => state.tasks.creatingTitle;

export const selectCreatingPriority = (state: RootState) => state.tasks.creatingPriority;

export const selectCreatingResearch = (state: RootState) => state.tasks.creatingResearch;

export const selectCreatingDesign = (state: RootState) => state.tasks.creatingDesign;

export const selectCreatingDev = (state: RootState) => state.tasks.creatingDevelopment;

export const selectCreatingDescription = (state: RootState) => state.tasks.creatingDescription;

export const selectItemsMultiplier = (state: RootState) => state.tasks.itemsMultiplier;

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

    return [...tasks].sort((firstTask, secondTask) => {
        return secondTask.date.getTime() - firstTask.date.getTime();
    })
})
 
export const selectFilteredByPriorityTasks = createSelector(
    [selectSortedTasks, selectLowPriority, selectNormalPriority, selectHighPriority], 
    
    (tasks, lowPriority, normalPriority, highPriority) => {
        return tasks.filter(task => task.priority === 'LOW' && lowPriority || task.priority === 'NORMAL' && normalPriority || 
            task.priority === 'HIGH' && highPriority
        )
    }
)

export const selectWithMarks = createSelector(
    [selectFilteredByPriorityTasks, selectResearch, selectDesign, selectDevelopment], 
    

    (tasks, research, design, dev) => {

        if (!research && !design && !dev) return tasks.filter(task => !task.research && !task.design && !task.development);

        return tasks.filter(task => (task.research && research) || (task.design &&  design) || (task.development && dev));
    }
)

export const selectFilteredTasks = createSelector([selectWithMarks, selectItemsMultiplier], (tasks, multiplier) => {
    return tasks.slice(0, 4*multiplier);
})
