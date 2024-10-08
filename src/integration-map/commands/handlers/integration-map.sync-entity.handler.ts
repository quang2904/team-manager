import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IntegrationMapSyncEntityCommand } from '..';
import { IntegrationMapService } from '../../integration-map.service';
import { IntegrationMap } from '../../integration-map.entity';

@CommandHandler(IntegrationMapSyncEntityCommand)
export class IntegrationMapSyncEntityHandler implements ICommandHandler<IntegrationMapSyncEntityCommand> {
  constructor(private readonly _integrationMapService: IntegrationMapService) {}

  public async execute(command: IntegrationMapSyncEntityCommand): Promise<IntegrationMap> {
    const { input } = command;
    return await this._integrationMapService.create(input);
  }
}
