import { ICommand } from '@nestjs/cqrs';
import { ICustomSmtpCreateInput } from 'contracts';

export class CustomSmtpCreateCommand implements ICommand {
  static readonly type = '[Custom SMTP] Create';

  constructor(public readonly input: ICustomSmtpCreateInput) {}
}
