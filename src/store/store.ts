import { configureStore, combineReducers } from "@reduxjs/toolkit";

import taskReducer from '././taskSlice/taskSlice';

const rootReducer = combineReducers({
    tasks: taskReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;