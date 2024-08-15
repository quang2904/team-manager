import { ICommand } from '@nestjs/cqrs';
import { IIntegrationMapSyncRepository } from 'contracts';

export class IntegrationSyncGithubRepositoryCommand implements ICommand {
  static readonly type = '[Integration] Sync Github Repository';

  constructor(public readonly input: IIntegrationMapSyncRepository) {}
}
