import { ITaskEstimation } from 'contracts';
import { TaskEstimationDTO } from './task-estimation.dto';

export class CreateTaskEstimationDTO extends TaskEstimationDTO implements ITaskEstimation {}
