import { ICommand } from '@nestjs/cqrs';
import { FindOptionsWhere } from 'typeorm';
import { IImportRecord, IImportRecordFind } from 'contracts';

export class ImportRecordUpdateOrCreateCommand implements ICommand {
  static readonly type = '[Find Or Create] Import Record';

  constructor(public readonly options: FindOptionsWhere<IImportRecordFind>, public readonly input?: IImportRecord) {}
}
