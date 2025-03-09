import crypto from 'crypto';

if (!globalThis.crypto) {
  (globalThis as any).crypto = crypto;
}

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/module/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
   // Habilitar CORS (opcional, pero recomendado para APIs públicas)
   app.enableCors();

   // Configuración de Swagger
   const config = new DocumentBuilder()
     .setTitle('Backoffice API')
     .setDescription('Documentación de la API del Backoffice')
     .setVersion('1.0')
     .addBearerAuth() // Agregar autenticación con JWT
     .build();

   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
