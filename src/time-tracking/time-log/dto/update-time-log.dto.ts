import { IManualTimeInput } from 'contracts';
import { ManualTimeLogDTO } from './manual-time-log.dto';

export class UpdateManualTimeLogDTO extends ManualTimeLogDTO implements IManualTimeInput {}
