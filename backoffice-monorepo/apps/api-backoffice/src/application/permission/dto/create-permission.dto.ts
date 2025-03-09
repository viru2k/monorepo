import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDto {
  @ApiProperty({ description: 'Nombre del permiso', example: 'READ_USERS' })
  name: string;
}
