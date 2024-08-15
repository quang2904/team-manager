import { ICommand } from '@nestjs/cqrs';
import { IEmployeeCreateInput, LanguagesEnum } from 'contracts';

export class EmployeeCreateCommand implements ICommand {
  static readonly type = '[Employee] Create';

  constructor(
    public readonly input: IEmployeeCreateInput,
    public readonly languageCode?: LanguagesEnum,
    public readonly originUrl?: string,
  ) {}
}
