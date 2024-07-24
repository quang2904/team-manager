import { ICommand } from '@nestjs/cqrs';
import { ITagCreateInput } from 'contracts';

export class TagCreateCommand implements ICommand {
  static readonly type = '[Tag] Create Task';

  constructor(public readonly input: ITagCreateInput) {}
}
