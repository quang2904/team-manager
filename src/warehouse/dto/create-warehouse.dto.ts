import { IWarehouse } from 'contracts';
import { WarehouseDTO } from './warehouse.dto';

/**
 * Create warehouse request DTO validation
 */
export class CreateWarehouseDTO extends WarehouseDTO implements IWarehouse {}
