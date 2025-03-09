import { ApiProperty } from "@nestjs/swagger";

export class UpdateSettingDto {
  @ApiProperty({ description: 'Clave de configuración', example: 'theme' })
  key: string;

  @ApiProperty({ description: 'Valor de la configuración', example: 'dark' })
  value: string;
}
