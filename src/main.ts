import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    }
  ));
    // Activar CORS para cualquier origen
    app.enableCors({
      origin: '*', // Permitir todos los orígenes
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
      credentials: false, // No se permiten credenciales (cookies, autenticaciones HTTP, etc.)
    });
    const config=new DocumentBuilder()
    .setTitle('API documentation')
    .setDescription('API :D')
    .setVersion('0.01')
    .addTag('Sushi')
    .build();
    const document=SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
