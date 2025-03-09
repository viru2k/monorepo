import { ApiProperty } from "@nestjs/swagger";

export class UpdatePermissionDto {
   @ApiProperty({ description: 'Nombre del permiso', example: 'READ_USERS' })
   name: string;
 }
