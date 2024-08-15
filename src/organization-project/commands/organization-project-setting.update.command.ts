import { ICommand } from '@nestjs/cqrs';
import { IOrganizationProject, IOrganizationProjectSetting } from 'contracts';

export class OrganizationProjectSettingUpdateCommand implements ICommand {
  static readonly type = '[Organization Project Setting] Update';

  constructor(public readonly id: IOrganizationProject['id'], public readonly input: IOrganizationProjectSetting) {}
}
