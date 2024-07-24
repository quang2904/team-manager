import { ICommand } from '@nestjs/cqrs';
import { IUserEmailInput, LanguagesEnum } from 'contracts';
import { IAppIntegrationConfig } from 'common';

export class WorkspaceSigninSendCodeCommand implements ICommand {
  static readonly type = '[Password Less] Send Workspace Signin Authentication Code';

  constructor(
    public readonly input: IUserEmailInput & Partial<IAppIntegrationConfig>,
    public readonly locale: LanguagesEnum,
  ) {}
}
