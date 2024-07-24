import { ICommand } from '@nestjs/cqrs';
import { IUserRegistrationInput, LanguagesEnum } from 'contracts';
import { IAppIntegrationConfig } from 'common';

export class AuthRegisterCommand implements ICommand {
  static readonly type = '[Auth] Register';

  constructor(
    public readonly input: IUserRegistrationInput & Partial<IAppIntegrationConfig>,
    public readonly languageCode: LanguagesEnum,
  ) {}
}
