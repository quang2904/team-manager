import { IQuery } from '@nestjs/cqrs';
import { IDateRangePicker, IOrganizationTeam, IOrganizationTeamStatisticInput } from 'contracts';

export class GetOrganizationTeamStatisticQuery implements IQuery {
  static readonly type = 'Get [Organization Team] Statistic';

  constructor(
    public readonly organizationTeamId: IOrganizationTeam['id'],
    public readonly options: IOrganizationTeamStatisticInput & IDateRangePicker,
  ) {}
}
