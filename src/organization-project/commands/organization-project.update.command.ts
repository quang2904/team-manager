import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProjectUpdateInput } from 'contracts';

export class OrganizationProjectUpdateCommand implements ICommand {
  static readonly type = '[Organization Project] Update';

  constructor(public readonly input: IOrganizationProjectUpdateInput) {}
}
