import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './infraestructure/filters/GlobalExceptionFilter';
import { ValidationPipe } from '@nestjs/common';
import { SuccessResponseInterceptor } from './infraestructure/interceptors/SuccessResponseInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // for success api response
  app.useGlobalInterceptors(new SuccessResponseInterceptor());
  // for global exception handling
  app.useGlobalFilters(new GlobalExceptionFilter());
  // for validation of DTOs
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
