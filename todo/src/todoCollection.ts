import { TodoItem } from "./todoItem.js";

//Object litteral to describe an object shape, type keyword allow us to create a 'type alias' which is a convenient way to assign a name to a shape type (a specific combination of name and type)
type ItemCounts = {
  total: number;
  incomplete: number;
};

export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.isComplete
    );
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  markComplete(id: number, isComplete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.isComplete = isComplete;
    }
  }

  removeComplete() {
    this.itemMap.forEach((item) => {
      if (item.isComplete) {
        this.itemMap.delete(item.id);
      }
    });
  }

  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
    };
  }
}
