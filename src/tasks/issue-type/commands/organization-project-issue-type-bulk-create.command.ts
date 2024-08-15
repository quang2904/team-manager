import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProject } from 'contracts';

export class OrganizationProjectIssueTypeBulkCreateCommand implements ICommand {
  static readonly type = '[Organization Project] Issue Type Bulk Create';

  constructor(public readonly input: IOrganizationProject) {}
}
