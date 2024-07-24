import { ICommand } from '@nestjs/cqrs';
import { ITenant } from 'contracts';

export class TenantStatusBulkCreateCommand implements ICommand {
  static readonly type = '[Tenant Status] Bulk Create';

  constructor(public readonly tenants: ITenant[]) {}
}
