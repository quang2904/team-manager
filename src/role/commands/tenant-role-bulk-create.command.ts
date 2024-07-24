import { ICommand } from '@nestjs/cqrs';
import { ITenant } from 'contracts';

export class TenantRoleBulkCreateCommand implements ICommand {
  static readonly type = '[Role] Bulk Create';

  constructor(public readonly input: ITenant[]) {}
}
