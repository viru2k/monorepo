import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del usuario', example: 1 })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ description: 'Nombre de usuario', example: 'gaston123' })
  username: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'gaston@example.com' })
  email: string;

  @Column()
  @ApiProperty({ description: 'Contraseña encriptada', example: '$2b$10$...' })
  password: string; // 🔹 Guardar encriptada con bcrypt

  @Column({ nullable: true })
  @ApiProperty({ description: 'Nombre del usuario', example: 'Gastón' })
  first_name: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'Apellido del usuario', example: 'Villafañe' })
  last_name: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'Número de teléfono', example: '+54 911 1234 5678' })
  phone: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'URL del avatar del usuario', example: 'https://example.com/avatar.jpg' })
  avatar_url: string;

  @ManyToOne(() => Role, (role) => role.users)
  @ApiProperty({ description: 'Rol del usuario', type: () => Role, example: { id: 1, name: 'ADMIN' } })
  role: Role;

  @Column({ default: true })
  @ApiProperty({ description: 'Indica si el usuario está activo', example: true })
  is_active: boolean;

  @Column({ nullable: true })
  @ApiProperty({ description: 'Token de verificación de email', example: 'abc123' })
  verification_token: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'Token de recuperación de contraseña', example: 'reset123' })
  reset_password_token: string;

  @Column({ type: 'timestamp', nullable: true })
  @ApiProperty({ description: 'Fecha de expiración del token de recuperación', example: '2025-03-09T15:00:00.000Z' })
  reset_password_expires: Date;

  @CreateDateColumn()
  @ApiProperty({ description: 'Fecha de creación del usuario', example: '2025-03-09T14:00:00.000Z' })
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Fecha de última actualización del usuario', example: '2025-03-10T10:00:00.000Z' })
  updated_at: Date;
}
