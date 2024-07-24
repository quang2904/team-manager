import { ICommand } from '@nestjs/cqrs';
import { IOrganization } from 'contracts';

export class OrganizationRelatedIssueTypeBulkCreateCommand implements ICommand {
  static readonly type = '[Organization RelatedIssueType] Bulk Create';

  constructor(public readonly input: IOrganization) {}
}
