import { ICommand } from '@nestjs/cqrs';
import { IEmployeeCreateInput, LanguagesEnum } from 'contracts';

export class EmployeeBulkCreateCommand implements ICommand {
  static readonly type = '[Employee] Bulk Create';

  constructor(
    public readonly input: IEmployeeCreateInput[],
    public readonly languageCode: LanguagesEnum,
    public readonly originUrl: string,
  ) {}
}
