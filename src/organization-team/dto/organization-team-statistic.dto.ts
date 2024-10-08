import { ApiPropertyOptional, IntersectionType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';
import { IDateRangePicker, IOrganizationTeamStatisticInput } from 'contracts';
import { parseToBoolean } from 'common';
import { DateRangeQueryDTO, RelationsQueryDTO } from './../../shared/dto';
/**
 * Get team statistic request DTO validation
 */
export class OrganizationTeamStatisticDTO
  extends IntersectionType(DateRangeQueryDTO, RelationsQueryDTO)
  implements IOrganizationTeamStatisticInput, IDateRangePicker
{
  /**
   * Indicates if last worked task row should be included in entity result.
   */
  @ApiPropertyOptional({ type: 'boolean' })
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => (value ? parseToBoolean(value) : false))
  readonly withLaskWorkedTask: boolean;

  /**
   * Indicates if organizationTeamId should be used to filter the records.
   */
  @ApiPropertyOptional({ type: 'boolean' })
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => (value ? parseToBoolean(value) : false))
  readonly includeOrganizationTeamId?: boolean;
}
