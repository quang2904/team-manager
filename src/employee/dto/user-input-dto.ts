import { IRole, IUser } from 'contracts';
import { IsNotEmptyObject, IsObject } from 'class-validator';
import { CreateUserDTO } from './../../user/dto';

export class UserInputDTO extends CreateUserDTO implements IUser {
  @IsObject()
  @IsNotEmptyObject()
  role: IRole;
}
