
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../../application/user/user.module';
import { ORM_ENTITIES } from '../../application/orm-entities';
import { ClientModule } from '../../application/client/client.module';
import { PermissionModule } from '../../application/permission/permission.module';
import { RoleModule } from '../../application/role/role.module';
import { SettingModule } from '../../application/settings/setting.module';
import { AuthModule } from '../../application/auth/auth.module';
import { RolePermissionModule } from '../../application/role-permissions/role-permission.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // O especifica el path al archivo .env si es necesario.
    }),
    TypeOrmModule.forRootAsync({
      imports: [AuthModule,ConfigModule,ClientModule,PermissionModule,RoleModule,RolePermissionModule,SettingModule, UserModule],
      inject: [ConfigService],
      //Client,Permissions,Role,RolePermission,Setting,User
      useFactory: (configService: ConfigService) => {
        console.log('Connecting to database host:', configService.get('DATABASE_HOST'));
        return {
          type: 'mysql',
          host: configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('DATABASE_USER'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: configService.get<string>('DATABASE_NAME'),
        entities: ORM_ENTITIES,
          synchronize: true,
        };
      },
    }),
    // ... otros módulos
  ],
  // ... controllers y providers
})
export class AppModule {}


// docker lanzar docker-compose up -d db
