import { ICommand } from '@nestjs/cqrs';
import { IOrganizationTeam } from 'contracts';

export class OrganizationTeamTaskRelatedIssueTypeBulkCreateCommand implements ICommand {
  static readonly type = '[Organization Team] Task RelatedIssueType Bulk Create';

  constructor(public readonly input: IOrganizationTeam) {}
}
