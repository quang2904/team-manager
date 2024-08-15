import { IExpenseCategory } from 'contracts';
import { ICommand } from '@nestjs/cqrs';

export class ExpenseCategoryFirstOrCreateCommand implements ICommand {
  static readonly type = '[ExpenseCategory] First Or Create';

  constructor(public readonly input: IExpenseCategory) {}
}
