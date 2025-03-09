import { ApiProperty } from '@nestjs/swagger';

export class CreateRolePermissionDto {
  @ApiProperty({ description: 'ID del rol', example: 1 })
  roleId: number;

  @ApiProperty({ description: 'ID del permiso', example: 2 })
  permissionId: number;
}
