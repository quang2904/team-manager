import { environment as env } from 'config';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { verify } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { PermissionsEnum, RolesEnum } from 'contracts';
import { isEmpty, PERMISSIONS_METADATA, removeDuplicates } from 'common';
import camelCase from 'camelcase';
import { RequestContext } from './../../core/context';
import { Employee } from './../../core/entities/internal';

@Injectable()
export class OrganizationPermissionGuard implements CanActivate {
  constructor(
    private readonly _reflector: Reflector,

    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    let isAuthorized = false;
    /*
     * Retrieve metadata for a specified key for a specified set of permissions
     */
    const permissions =
      removeDuplicates(
        this._reflector.getAllAndOverride<PermissionsEnum[]>(PERMISSIONS_METADATA, [
          context.getHandler(),
          context.getClass(),
        ]),
      ) || [];
    if (isEmpty(permissions)) {
      isAuthorized = true;
    } else {
      const token = RequestContext.currentToken();
      const { employeeId, role } = verify(token, env.JWT_SECRET) as {
        id: string;
        role: string;
        employeeId: string;
      };
      //Enabled AllowSuperAdminRole from .env file
      if (env.allowSuperAdminRole === true) {
        //Super admin and admin has allowed to access request
        const isSuperAdmin = RequestContext.hasRoles([RolesEnum.SUPER_ADMIN]);
        if (isSuperAdmin === true) {
          isAuthorized = isSuperAdmin;
          return isAuthorized;
        }
      }

      let organizationId: string;
      if (role === RolesEnum.EMPLOYEE) {
        const employee = await this.employeeRepository.findOne({
          where: {
            id: employeeId,
          },
          relations: {
            organization: true,
          },
        });
        if (employeeId && employee.organization) {
          const { organization } = employee;
          organizationId = organization.id;
          isAuthorized = permissions.filter((permission) => organization[camelCase(permission)]).length > 0;
        }
      } else {
        isAuthorized = true;
      }
      if (!isAuthorized) {
        console.log(
          'Unauthorized access blocked. OrganizationId:',
          organizationId,
          ' Permissions Checked:',
          permissions,
        );
      }
    }
    return isAuthorized;
  }
}
