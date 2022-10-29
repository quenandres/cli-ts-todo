import { TaskItem } from './models/TaskItem';
export const tasks: TaskItem[] = [
    new TaskItem(1, 'Task one', false),
    new TaskItem(2, 'Task two', false),
    new TaskItem(3, 'Task three', false),
    new TaskItem(4, 'Task four', true)
];