import { __decorate } from "tslib";
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ConfigModule.forRoot({
                isGlobal: true, // Hace que las variables de entorno estén disponibles globalmente
            }),
            TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT, 10) || 3306,
                username: process.env.DB_USER || 'root',
                password: process.env.DB_PASSWORD || 'root',
                database: process.env.DB_NAME || 'backoffice',
                autoLoadEntities: true,
                synchronize: true, // No usar en producción (genera automáticamente tablas y cambios en la base de datos)
            }),
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map