import inquirer from 'inquirer';
import { TaskCollection } from './models/TaskCollection';
import { tasks } from './exampleData';

const collection = new TaskCollection('quenandres', tasks);


function displayTaskList():void {
    console.log(`${collection.userName}'s Task` + `(${collection.getTaskCounts().incompleted}) task to do`);
    collection.getTaskItems(true).forEach(task => task.printDetails());
}

enum Commands {
    Add = "Add new task",
    Complete = "Complete Task",
    Toggle = "Show/Hide Completed",
    Purge = "Remove Complete task",
    Quit = "Quit"
}

async function promptUser() {
    console.clear();
    displayTaskList();
    const answers = await inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose Option',
        choices: Object.values(Commands)
    });
    console.log('answers');
    console.log(answers);
    
}

promptUser();
