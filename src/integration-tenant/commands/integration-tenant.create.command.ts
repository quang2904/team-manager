import { ICommand } from '@nestjs/cqrs';
import { IIntegrationTenantCreateInput } from 'contracts';

export class IntegrationTenantCreateCommand implements ICommand {
  static readonly type = '[Integration] Create Integration';

  constructor(public readonly input: IIntegrationTenantCreateInput) {}
}
