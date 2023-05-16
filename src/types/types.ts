export const PRIORITY_LOW = 'LOW';
export const PRIORITY_NORMAL = 'NORMAL';
export const PRIORITY_HIGH = 'HIGH';

export type Priority = 'LOW' | 'NORMAL' | 'HIGH';

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