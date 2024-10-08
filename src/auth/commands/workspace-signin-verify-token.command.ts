import { IUserEmailInput, IUserTokenInput } from 'contracts';
import { ICommand } from '@nestjs/cqrs';

export class WorkspaceSigninVerifyTokenCommand implements ICommand {
  static readonly type = '[Password Less] Workspace Signin Verify Token';

  constructor(public readonly input: IUserEmailInput & IUserTokenInput) {}
}
