import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type Priority = 'LOW' | 'NORMAL' | 'HIGH'

export interface ITask {
    id: number,
    
    title: string,
    
    priority: Priority,
    
    date: Date,

    research: boolean,
    design: boolean,
    development: boolean
    
    description: string
}


interface ITasksState {
    tasks: ITask[],

    sortByNew: boolean,

    currentTaskId: number | null,

    lowPriority: boolean,
    normalPriority: boolean,
    highPriority: boolean,

    
    research: boolean,
    design: boolean,
    development: boolean
    
    creatingTitle: string,
    creatingPriority: Priority,
    creatingResearch: boolean,
    creatingDesign: boolean,
    creatingDevelopment: boolean,
    creatingDescription: string
};

const initialState: ITasksState= {
    tasks: [
        {
            id: 1,
            title: 'first task',
            priority: 'LOW',
            date: new Date(0),
            research: true,
            design: false,
            development: true,
            description: 'FIRST TASK DESCRIPTION'
        },
        {
            id: 2,
            title: 'sec task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: ''
        },
        {
            id: 3,
            title: '3 task',
            priority: 'NORMAL',
            date: new Date(),
            research: true,
            design: true,
            development: true,
            description: 'null'
        },
        {
            id: 4,
            title: '4 task',
            priority: 'HIGH',
            date: new Date(),
            research: true,
            design: false,
            development: true,
            description: 'null'
        }
    ],

    currentTaskId: null,
    
    sortByNew: true,
    
    lowPriority: false,
    normalPriority: false,
    highPriority: true,
    
    research: false,
    design: false,
    development: false,
    
    creatingTitle: '',
    creatingPriority: "LOW",
    creatingResearch: false,
    creatingDesign: false,
    creatingDevelopment: false,
    creatingDescription: ''
};

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        createTask: (state) => {
            if (!state.creatingTitle || !state.creatingPriority || !state.creatingDescription) return;
            
            if (state.creatingResearch || state.creatingDesign || state.creatingDevelopment) {

                state.tasks.push({
                    id: state.tasks.length,
                    title: state.creatingTitle,
                    priority: state.creatingPriority,
                    date: new Date(),
                    research: state.creatingResearch,
                    design: state.creatingDesign,
                    development: state.creatingDevelopment,
                    description: state.creatingDescription
                    
                });

                state.creatingTitle = '';
                state.creatingPriority = 'LOW';
                state.creatingResearch = false;
                state.creatingDesign = false;
                state.creatingDevelopment = false;
                state.creatingDescription = '';
            }
        },

        updateTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id !== action.payload) {
                    return task;
                }
                
                return {
                    ...task,
                    title: state.creatingTitle,
                    priority: state.creatingPriority,
                    research: state.creatingResearch,
                    design: state.creatingDesign,
                    development: state.creatingDevelopment,
                    description: state.creatingDescription
                }
            })
            
            state.creatingTitle = '';
            state.creatingPriority = 'LOW';
            state.creatingResearch = false;
            state.creatingDesign = false;
            state.creatingDevelopment = false;
            state.creatingDescription = '';

        },

        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
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

        setNewTaskTitle: (state, action: PayloadAction<string>) => {
            state.creatingTitle = action.payload;
        },

        setNewTaskPriority: (state, action: PayloadAction<Priority>) => {
            state.creatingPriority = action.payload;
        },


        setNewTaskResearch: (state, action: PayloadAction<boolean>) => {
            state.creatingResearch = action.payload;
        },

        setNewTaskDesign: (state, action: PayloadAction<boolean>) => {
            state.creatingDesign = action.payload;
        },

        setNewTaskDevelopment: (state, action: PayloadAction<boolean>) => {
            state.creatingDevelopment = action.payload;
        },

        setNewTaskDescription: (state, action: PayloadAction<string>) => {
            state.creatingDescription = action.payload;
        },


        setCurrentTaskId : (state, action: PayloadAction<number | null>) => {
            state.currentTaskId = action.payload;
        }
    }
});


const { actions, reducer } = taskSlice;

export const { 
    
    createTask, updateTask, deleteTask, setResearch, setDesign, setDevelopment,

    setSortBy, setLowPriority, setNormalPriority, setHighPriority, setNewTaskTitle, 
    
    setNewTaskPriority, setNewTaskResearch, setNewTaskDesign, setNewTaskDevelopment, 
    
    setNewTaskDescription, setCurrentTaskId

} = actions;

export default reducer;