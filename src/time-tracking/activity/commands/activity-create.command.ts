import { ICommand } from '@nestjs/cqrs';
import { IActivity } from 'contracts';

export class ActivityCreateCommand implements ICommand {
  static readonly type = '[Activity] Create Activity';

  constructor(public readonly input: IActivity) {}
}
