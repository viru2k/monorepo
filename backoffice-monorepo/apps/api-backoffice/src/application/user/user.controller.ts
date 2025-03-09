import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
  Request,
  Param,
  Body,
  BadRequestException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ✅ Crear un nuevo usuario (sin autenticación para permitir registros)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // ✅ Obtener el perfil del usuario autenticado
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    console.log('Usuario autenticado:', req.user); // 🔹 Depuración
    return {
      userId: req.user.id,
      username: req.user.username,
      role: req.user.role, // 🔹 Agregar esto
    };
  }



  // ✅ Endpoint accesible solo por administradores
  @Roles('Admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('admin')
  getAdminData() {
    return { message: 'Solo los admins pueden ver esto' };
  }

  // ✅ Obtener un usuario por ID
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id === 'admin') {
      throw new BadRequestException('La ruta "/users/admin" es específica y no es un ID');
    }

    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new BadRequestException('El ID debe ser un número válido');
    }
    console.log('test',this.userService.findOne(userId))
    return this.userService.findOne(userId);
  }

  // ✅ Actualizar un usuario por ID
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new BadRequestException('El ID debe ser un número válido');
    }

    return this.userService.update(userId, updateUserDto);
  }

  // ✅ Eliminar un usuario por ID (Solo Admins)
  @Roles('Admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new BadRequestException('El ID debe ser un número válido');
    }

    return this.userService.remove(userId);
  }
}
