import { ICommand } from '@nestjs/cqrs';
import { IOrganizationTeam } from 'contracts';

export class OrganizationTeamTaskStatusBulkCreateCommand implements ICommand {
  static readonly type = '[Organization Team] Task Status Bulk Create';

  constructor(public readonly input: IOrganizationTeam) {}
}
