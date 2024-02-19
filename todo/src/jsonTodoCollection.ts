import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

type schemaType = {
  tasks: { id: number; task: string; isComplete: boolean; }[];
};

export class JsonTodoCollection extends TodoCollection {
  private database: LowSync<schemaType>;

  constructor(public userName: string, todoItems: TodoItem[] = []) {
    super(userName, []);
    this.database = new LowSync(new JSONFileSync("Todos.json"), { tasks: todoItems });
    this.database.read();

    if (this.database.data == null) {
      this.database.data = { tasks: todoItems };
      this.database.write();
      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    } else {
      this.database.data.tasks.forEach((item) =>
        this.itemMap.set(
          item.id,
          new TodoItem(item.id, item.task, item.isComplete)
        )
      );
    }
  }

  addTodo(task: string): number {
    let result = super.addTodo(task);
    this.storeTasks();
    return result;
  }

  markComplete(id: number, isComplete: boolean): void {
    super.markComplete(id, isComplete);
    this.storeTasks();
  }

  removeComplete(): void {
    super.removeComplete();
    this.storeTasks();
  }

  private storeTasks() {
    this.database.data.tasks = [...this.itemMap.values()];
    this.database.write();
  }
}
