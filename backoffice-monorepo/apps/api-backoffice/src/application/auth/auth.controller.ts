import { Controller, Post, Get, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    @Roles('ADMIN') // 🔹 Solo los admins pueden acceder
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('admin')
    getAdminData() {
      return { message: 'Solo los admins pueden ver esto' };
    }

}
