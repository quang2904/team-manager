import { IOrganizationTaskSettingUpdateInput } from 'contracts';
import { OrganizationTaskSettingDTO } from './organization-task-setting.dto';

/**
 * Update organization task setting
 */
export class UpdateOrganizationTaskSettingDTO
  extends OrganizationTaskSettingDTO
  implements IOrganizationTaskSettingUpdateInput {}
