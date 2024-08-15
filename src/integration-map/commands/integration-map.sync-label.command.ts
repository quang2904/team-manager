import { IIntegrationMapSyncEntity, ITagCreateInput, ITagUpdateInput } from 'contracts';
import { ICommand } from '@nestjs/cqrs';

export class IntegrationMapSyncLabelCommand implements ICommand {
  static readonly type = '[Integration Map] Sync Label';

  constructor(public readonly request: IIntegrationMapSyncEntity<ITagCreateInput | ITagUpdateInput>) {}
}
