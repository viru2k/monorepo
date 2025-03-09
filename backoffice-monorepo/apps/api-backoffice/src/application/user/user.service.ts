import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // 🔹 Método para buscar usuario por email
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
  // 🔹 Método para encriptar contraseñas
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  // 🔹 Método para comparar contraseñas
  async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  // 🔹 Crear usuario con contraseña encriptada
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(createUserDto.password);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword, // Guardamos la contraseña encriptada
    });
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.password) {
      updateUserDto.password = await this.hashPassword(updateUserDto.password);
    }
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
