import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { IUserUpdateInput, LanguagesEnum } from 'contracts';

export class UpdatePreferredLanguageDTO implements IUserUpdateInput {
  @ApiProperty({ type: () => String, enum: LanguagesEnum })
  @IsNotEmpty()
  @IsEnum(LanguagesEnum)
  readonly preferredLanguage: LanguagesEnum;
}
