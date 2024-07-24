import { SetMetadata } from '@nestjs/common';
import { PERMISSIONS_METADATA } from 'common';
import { PermissionsEnum } from 'contracts';

export const Permissions = (...permissions: PermissionsEnum[]) => SetMetadata(PERMISSIONS_METADATA, permissions);
