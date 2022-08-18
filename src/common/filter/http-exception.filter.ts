import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';

@Catch()
class AllEXceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllEXceptionFilter.name);
  catch(exception: any, host: ArgumentsHost) {
    const context: HttpArgumentsHost = host.switchToHttp();
    const response: any = context.getResponse();
    const request: any = context.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error;
    `Status: ${status} Message: ${JSON.stringify(message)}`;

    response.status(status).json({
      time: new Date().toISOString(),
      path: request.url,
      error: message,
    });
  }
}

export { AllEXceptionFilter };
