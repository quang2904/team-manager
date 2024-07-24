import { IGetTaskOptions, ITask } from 'contracts';

export class GithubTaskUpdateOrCreateCommand {
  constructor(public readonly task: ITask, public readonly options: IGetTaskOptions) {}
}
