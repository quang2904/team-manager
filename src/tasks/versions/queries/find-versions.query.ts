import { IQuery } from '@nestjs/cqrs';
import { ITaskVersionFindInput } from 'contracts';

export class FindVersionsQuery implements IQuery {
  static readonly type = '[Task Versions] Query All';

  constructor(public readonly options: ITaskVersionFindInput) {}
}
