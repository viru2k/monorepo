import { ApiProperty } from "@nestjs/swagger";

export class UpdateRolePermissionDto {
  @ApiProperty({ description: 'ID del rol', example: 1 })
  roleId: number;

  @ApiProperty({ description: 'ID del permiso', example: 2 })
  permissionId: number;
}
