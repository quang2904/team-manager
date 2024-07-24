import { IListQueryInput, IRequestApprovalFindInput } from 'contracts';
import { ICommand } from '@nestjs/cqrs';

export class RequestApprovalPolicyGetCommand implements ICommand {
  static readonly type = '[RequestApprovalPolicy] Get';

  constructor(public readonly input: IListQueryInput<IRequestApprovalFindInput>) {}
}
