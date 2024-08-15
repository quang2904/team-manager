import { ICommand } from '@nestjs/cqrs';
import { IEventTypeCreateInput } from 'contracts';

export class EventTypeCreateCommand implements ICommand {
  static readonly type = '[EventType] Create';

  constructor(public readonly input: IEventTypeCreateInput) {}
}
