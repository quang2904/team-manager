import { ICommand } from '@nestjs/cqrs';
import { IGetTimeLogConflictInput } from 'contracts';

export class IGetConflictTimeLogCommand implements ICommand {
  static readonly type = '[TimeLog] get conflict';

  constructor(public readonly input: IGetTimeLogConflictInput) {}
}
