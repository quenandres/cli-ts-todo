export class TaskItem {
    public constructor(
        public id: number,
        public task: string,
        public completed: boolean = false
    ){}

    printDetails():void {
        console.log(`${this.id}\t${this.task} ${this.completed ? "\t(completed)" : ""}`);
    }

}