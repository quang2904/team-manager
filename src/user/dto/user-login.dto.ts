import { IntersectionType } from '@nestjs/swagger';
import { IUserEmailInput, IUserPasswordInput } from 'contracts';
import { UserEmailDTO } from './user-email.dto';
import { UserPasswordDTO } from './user-password.dto';

/**
 * User login DTO validation
 */
export class UserLoginDTO
  extends IntersectionType(UserEmailDTO, UserPasswordDTO)
  implements IUserEmailInput, IUserPasswordInput {}

/**
 * User SignIn Workspace DTO validation
 */
export class UserSigninWorkspaceDTO extends UserLoginDTO {}
