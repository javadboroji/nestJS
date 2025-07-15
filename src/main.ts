import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // تنظیمات swagger
  const config = new DocumentBuilder()
    .setTitle('My Swagger')             // عنوان API
    .setDescription('API description')  // توضیحات
    .setVersion('1.0')              // ورژن
    .build();

  // ساخت داکیومنت swagger
  const document = SwaggerModule.createDocument(app, config);

  // راه‌اندازی swagger-ui
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
