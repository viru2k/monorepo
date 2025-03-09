import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ description: 'Nombre del rol', example: 'ADMIN' })
  name: string;
}
