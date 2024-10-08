import { ICommand } from '@nestjs/cqrs';
import { ICandidatePersonalQualities } from 'contracts';

export class CandidatePersonalQualitiesBulkDeleteCommand implements ICommand {
  static readonly type = '[CandidatePersonalQualities] Delete';

  constructor(public readonly id: string, public readonly personalQualities?: ICandidatePersonalQualities[]) {}
}
