import { ApiProperty } from "@nestjs/swagger";

export class UpdateRoleDto {
  @ApiProperty({ description: 'Nombre del rol', example: 'ADMIN' })
  name: string;
}
