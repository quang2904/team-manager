import { ICommand } from '@nestjs/cqrs';
import { IOrganizationTeamJoinRequestCreateInput, LanguagesEnum } from 'contracts';
import { IAppIntegrationConfig } from 'common';

export class OrganizationTeamJoinRequestCreateCommand implements ICommand {
  static readonly type = '[Organization Team Join Request] Create';

  constructor(
    public readonly input: IOrganizationTeamJoinRequestCreateInput & Partial<IAppIntegrationConfig>,
    public readonly languageCode: LanguagesEnum,
  ) {}
}
