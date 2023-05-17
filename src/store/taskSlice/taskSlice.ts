import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Priority } from '../../types/types';
import  { PRIORITY_LOW, PRIORITY_HIGH, PRIORITY_NORMAL } from '../../types/types';

import { ITask } from '../../types/types';


interface ITasksState {
    tasks: ITask[],

    sortByNew: boolean,

    pageCount: number,

    currentTaskId: number | null,

    lowPriority: boolean,
    normalPriority: boolean,
    highPriority: boolean,

    
    research: boolean,
    design: boolean,
    development: boolean
    
    tempTitle: string,
    tempPriority: Priority,
    tempResearch: boolean,
    tempDesign: boolean,
    tempDev: boolean,
    tempDescription: string
};

const initialState: ITasksState= {
    tasks: [
        {
            id: 1,
            title: '1 task',
            priority: 'LOW',
            date: new Date(0),
            research: true,
            design: false,
            development: true,
            description: '1 task descr'
        },
        {
            id: 2,
            title: '2 task',
            priority: 'HIGH',
            date: new Date('2017-01-26'),
            research: true,
            design: false,
            development: true,
            description: '2 task descr'
        },
        {
            id: 3,
            title: '3 task',
            priority: 'NORMAL',
            date: new Date(),
            research: true,
            design: true,
            development: true,
            description: '3 task descr'
        },
        {
            id: 4,
            title: '4 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '4 task descr'
        },
        {
            id: 5,
            title: '5 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '5 task descr'
        },
        {
            id: 6,
            title: '46 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '6 task descr'
        },
        {
            id: 7,
            title: '7 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '7 task descr'
        },
        {
            id: 8,
            title: '8 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '8 task descr'
        },
        {
            id: 9,
            title: '9 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '9 task descr'
        },
        {
            id: 10,
            title: '10 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '10 task descr'
        },
        {
            id: 10,
            title: '10 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '10 task descr'
        },
        {
            id: 11,
            title: '11 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '11 task descr'
        },
        {
            id: 12,
            title: '12 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '12 task descr'
        },
        {
            id: 13,
            title: '13 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '13 task descr'
        },
        {
            id: 14,
            title: '14 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '14 task descr'
        },
        {
            id: 15,
            title: '15 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '15 task descr'
        },
        {
            id: 16,
            title: '16 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '16 task descr'
        },
        {
            id: 17,
            title: '17 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '17 task descr'
        },
        {
            id: 18,
            title: '18 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '18 task descr'
        },
        {
            id: 19,
            title: '19 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '19 task descr'
        },
        {
            id: 20,
            title: '20 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '20 task descr'
        },
        {
            id: 21,
            title: '21 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '21 task descr'
        },
        {
            id: 23,
            title: '23 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '23 task descr'
        },
        {
            id: 24,
            title: '24 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '24 task descr'
        },
        {
            id: 25,
            title: '25 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: '25 task descr'
        },

    ],

    pageCount: 0,
    currentTaskId: null,
    
    sortByNew: true,
    
    lowPriority: false,
    normalPriority: false,
    highPriority: true,
    
    research: false,
    design: false,
    development: false,
    
    tempTitle: '',
    tempPriority: "LOW",
    tempResearch: false,
    tempDesign: false,
    tempDev: false,
    tempDescription: ''
};

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        createTask: (state) => {
            if (!state.tempTitle || !state.tempPriority || !state.tempDescription) return;
            
            state.tasks.push({
                id: state.tasks.length+1,
                title: state.tempTitle,
                priority: state.tempPriority,
                date: new Date(),
                research: state.tempResearch,
                design: state.tempDesign,
                development: state.tempDev,
                description: state.tempDescription
                
            });

            state.tempTitle = '';
            state.tempPriority = PRIORITY_LOW;
            state.tempResearch = false;
            state.tempDesign = false;
            state.tempDev = false;
            state.tempDescription = '';
        },
        updateTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id !== action.payload) {
                    return task;
                }
                
                return {
                    ...task,
                    title: state.tempTitle,
                    priority: state.tempPriority,
                    research: state.tempResearch,
                    design: state.tempDesign,
                    development: state.tempDev,
                    description: state.tempDescription
                }
            })
            
            state.tempTitle = '';
            state.tempPriority = PRIORITY_LOW;
            state.tempResearch = false;
            state.tempDesign = false;
            state.tempDev = false;
            state.tempDescription = '';

        },

        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        increasePageCount: (state) => {
            state.pageCount++;
        },
        setResearch: (state, action: PayloadAction<boolean>) => {
            state.research = action.payload;
        },
        setDesign: (state, action: PayloadAction<boolean>) => {
            state.design = action.payload;
        },
        setDevelopment: (state, action: PayloadAction<boolean>) => {
            state.development = action.payload;
        },
        setSortBy: (state, action: PayloadAction<boolean>) => {
            state.sortByNew = action.payload;
        },
        setLowPriority: (state, action: PayloadAction<boolean>) => {
            state.lowPriority = action.payload;
        },
        setNormalPriority: (state, action: PayloadAction<boolean>) => {
            state.normalPriority = action.payload;
        },
        setHighPriority: (state, action: PayloadAction<boolean>) => {
            state.highPriority = action.payload;
        },
        setTempTitle: (state, action: PayloadAction<string>) => {
            state.tempTitle = action.payload;
        },
        setTempPriority: (state, action: PayloadAction<Priority>) => {
            state.tempPriority = action.payload;
        },
        setTempResearch: (state, action: PayloadAction<boolean>) => {
            state.tempResearch = action.payload;
        },
        setTempDesign: (state, action: PayloadAction<boolean>) => {
            state.tempDesign = action.payload;
        },
        setTempDev: (state, action: PayloadAction<boolean>) => {
            state.tempDev = action.payload;
        },
        setTempDescription: (state, action: PayloadAction<string>) => {
            state.tempDescription = action.payload;
        },
        setCurrentTaskId : (state, action: PayloadAction<number | null>) => {
            state.currentTaskId = action.payload;
        }
    }
});


const { actions, reducer } = taskSlice;

export const { 
    
    createTask, updateTask, deleteTask, setResearch, setDesign, setDevelopment,

    setSortBy, setLowPriority, setNormalPriority, setHighPriority, setTempTitle, 
    
    setTempPriority, setTempResearch, setTempDesign, setTempDev, 
    
    setTempDescription, setCurrentTaskId, increasePageCount

} = actions;

export default reducer;