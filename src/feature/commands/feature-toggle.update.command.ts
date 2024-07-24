import { ICommand } from '@nestjs/cqrs';
import { IFeatureOrganizationUpdateInput } from 'contracts';

export class FeatureToggleUpdateCommand implements ICommand {
  static readonly type = '[Feature] Toggle Update';

  constructor(public readonly input: IFeatureOrganizationUpdateInput) {}
}
