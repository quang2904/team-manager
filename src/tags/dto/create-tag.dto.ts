import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { ITagCreateInput } from 'contracts';
import { TenantOrganizationBaseDTO } from './../../core/dto';
import { Tag } from './../tag.entity';

export class CreateTagDTO
  extends IntersectionType(
    PartialType(TenantOrganizationBaseDTO),
    PickType(Tag, ['name', 'description', 'color', 'icon', 'organizationTeamId']),
  )
  implements ITagCreateInput {}
