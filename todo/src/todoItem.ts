// TodoItem class define the properties data type of a TodoItem object
export class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public isComplete: boolean = false
  ) {
    this.id = id;
    this.task = task;
    this.isComplete = isComplete;
  }

  printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.isComplete ? "\t(complete)" : ""}`
    );
  }
}
