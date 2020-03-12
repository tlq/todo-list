import {ITask} from "../interfaces/ITask";

export class Task implements ITask {
  id: string;
  label: string;
  description: string;
  category: string;
  done: boolean;
  created:string;
  accomplished: string;

  constructor(args: { id: number, label: string, description: string, category: string, done: boolean, created: string,
    accomplished: string}) {
    Object.assign(this, args);
  }


}
