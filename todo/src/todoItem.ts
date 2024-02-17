export class TodoItem {
  public id: number;
  public task: string;
  public isComplete: boolean = false;

  public constructor(id: number, task: string, isComplete: boolean = false) {
    this.id = id;
    this.task = task;
    this.isComplete = isComplete;
  }

  public printDetails(): void {
    console.log(
      `$(this.id)\t${this.task} ${this.isComplete ? "\t(complete)" : ""}`
    );
  }
}
