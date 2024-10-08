import { ICommand } from '@nestjs/cqrs';
import { IOrganization } from 'contracts';

export class OrganizationIssueTypeBulkCreateCommand implements ICommand {
  static readonly type = '[Organization] Issue Type Bulk Create';

  constructor(public readonly input: IOrganization) {}
}
