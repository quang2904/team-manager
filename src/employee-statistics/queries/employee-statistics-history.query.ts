import { IQuery } from '@nestjs/cqrs';
import { IEmployeeStatisticsHistoryFindInput } from 'contracts';

export class EmployeeStatisticsHistoryQuery implements IQuery {
  static readonly type = '[EmployeeStatistics] History';

  constructor(public readonly input: IEmployeeStatisticsHistoryFindInput) {}
}
