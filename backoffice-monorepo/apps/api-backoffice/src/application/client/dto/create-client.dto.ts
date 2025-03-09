import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
  @ApiProperty({ description: 'Nombre del cliente', example: 'Empresa XYZ' })
  name: string;
  @ApiProperty({ description: 'email', example: 'Empresa XYZ' })
  email: string;
  @ApiProperty({ description: 'telefono', example: 'Empresa XYZ' })
  phone: string;
}
