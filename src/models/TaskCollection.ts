import { TaskItem } from "./TaskItem";

type TaskCounts = {
    total: number;
    incompleted: number;
}

export class TaskCollection {

    nextId:number = 1;
    taskMap = new Map<number, TaskItem>();

    constructor(
        public userName: string,
        public taskItems: TaskItem[]
    ){
        taskItems.forEach(item => this.taskMap.set(item.id, item));
    }


    addTask( task: string ):number {
        while(this.getTaskById(this.nextId)) {
            this.nextId++;
        }
        this.taskMap.set(this.nextId, new TaskItem(this.nextId, task));
        return this.nextId;
    }

    getTaskItems( includeComplete: boolean ): TaskItem[] {
        return [...this.taskMap.values()].filter(task => includeComplete || !task.completed);
    }

    getTaskById(id:number): TaskItem | undefined {
        return this.taskMap.get(id);
    }

    markComplete(id: number, completed: boolean): void {
        const task = this.getTaskById(id);
        if( task ) {
            task.completed = completed;
        }
    }

    removeComplete():void {
        this.taskMap.forEach(task => {
            if( task.completed ) {
                this.taskMap.delete(task.id)
            }
        });
    }

    getTaskCounts():TaskCounts {
        return {
            total: this.taskMap.size,
            incompleted: this.getTaskItems(false).length
        }
    }
}