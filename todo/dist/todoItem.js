"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
// TodoItem class define the properties data type of a TodoItem object
class TodoItem {
    id;
    task;
    isComplete;
    constructor(id, task, isComplete = false) {
        this.id = id;
        this.task = task;
        this.isComplete = isComplete;
        this.id = id;
        this.task = task;
        this.isComplete = isComplete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.isComplete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
