import { ICommand } from '@nestjs/cqrs';
import { IIntegrationMapSyncEntity, ITimeLog } from 'contracts';

export class IntegrationMapSyncTimeLogCommand implements ICommand {
  static readonly type = '[Integration Map] Sync TimeLog';

  constructor(public readonly input: IIntegrationMapSyncEntity<Partial<ITimeLog>>) {}
}
