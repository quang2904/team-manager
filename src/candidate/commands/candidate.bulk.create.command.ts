import { ICommand } from '@nestjs/cqrs';
import { ICandidateCreateInput, LanguagesEnum } from 'contracts';

export class CandidateBulkCreateCommand implements ICommand {
  static readonly type = '[Candidate] Bulk Create';

  constructor(
    public readonly input: ICandidateCreateInput[],
    public readonly languageCode: LanguagesEnum,
    public readonly originUrl: string,
  ) {}
}
