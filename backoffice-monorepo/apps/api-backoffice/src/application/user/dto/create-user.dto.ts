import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Nombre de usuario', example: 'gaston123' })
  username: string;

  @ApiProperty({ description: 'Correo electrónico', example: 'gaston@example.com' })
  email: string;

  @ApiProperty({ description: 'Contraseña', example: '123456' })
  password: string;

  @ApiProperty({ description: 'ID del rol', example: 1 })
  role_id: number;
}
