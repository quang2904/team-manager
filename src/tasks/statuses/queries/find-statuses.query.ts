import { IQuery } from '@nestjs/cqrs';
import { ITaskStatusFindInput } from 'contracts';

export class FindStatusesQuery implements IQuery {
  static readonly type = '[Task Statuses] Query All';

  constructor(public readonly options: ITaskStatusFindInput) {}
}
