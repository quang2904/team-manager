import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { ROLES_METADATA } from 'common';
import { RolesEnum } from 'contracts';

export const Roles = (...roles: RolesEnum[]): CustomDecorator => SetMetadata(ROLES_METADATA, roles);
