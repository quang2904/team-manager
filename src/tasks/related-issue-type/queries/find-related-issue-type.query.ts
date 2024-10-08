import { IQuery } from '@nestjs/cqrs';
import { ITaskStatusFindInput } from 'contracts';

export class FindRelatedIssueTypesQuery implements IQuery {
  static readonly type = '[Task RelatedIssueTypes] Query All';

  constructor(public readonly options: ITaskStatusFindInput) {}
}
