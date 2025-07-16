import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ResponseInterceptor } from './comm/interceptors/response.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //  swagger
  const config = new DocumentBuilder()
    .setTitle('My Swagger')            
    .setDescription('API description')  
    .setVersion('1.0')             
    .build();

  // swagger
  const document = SwaggerModule.createDocument(app, config);

  // swagger-ui
  SwaggerModule.setup('api-docs', app, document);
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true, 
  });
  //add interceptore
  app.useGlobalInterceptors(new ResponseInterceptor())
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
