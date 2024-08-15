import { ICommand } from '@nestjs/cqrs';
import { ITimeSlot } from 'contracts';

export class CreateTimeSlotCommand implements ICommand {
  static readonly type = '[TimeSlot] create';

  constructor(public readonly input: ITimeSlot) {}
}
