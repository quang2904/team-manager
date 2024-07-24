import { IMatchingCriterions } from 'contracts';
import { ICommand } from '@nestjs/cqrs';

export class SaveEmployeeCriterionCommand implements ICommand {
  static readonly type = '[EmployeeCriterion] Create';

  constructor(public readonly input?: IMatchingCriterions) {}
}
