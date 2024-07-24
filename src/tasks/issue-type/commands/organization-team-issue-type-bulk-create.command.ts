import { ICommand } from '@nestjs/cqrs';
import { IOrganizationTeam } from 'contracts';

export class OrganizationTeamIssueTypeBulkCreateCommand implements ICommand {
  static readonly type = '[Organization Team] Issue Type Bulk Create';

  constructor(public readonly input: IOrganizationTeam) {}
}
