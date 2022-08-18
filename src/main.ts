import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllEXceptionFilter } from './common/filter/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/interceptor.timeout';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllEXceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());
  await app.listen(3000);
}
bootstrap();
