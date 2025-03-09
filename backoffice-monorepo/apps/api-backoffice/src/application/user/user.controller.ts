import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@ApiTags('Users') // 📌 Categoría en Swagger
@ApiBearerAuth() // 📌 Requiere autenticación JWT en Swagger
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Crear usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado correctamente', type: User })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios', type: [User] })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener usuario por ID' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado', type: User })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar usuario' })
  @ApiResponse({ status: 200, description: 'Usuario actualizado', type: User })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar usuario' })
  @ApiResponse({ status: 200, description: 'Usuario eliminado' })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
