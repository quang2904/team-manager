import { ICommand } from '@nestjs/cqrs';
import { IExpenseCreateInput } from 'contracts';

export class ExpenseCreateCommand implements ICommand {
  static readonly type = '[Expense] Create';

  constructor(public readonly input: IExpenseCreateInput) {}
}
