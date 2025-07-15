import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getAll')
  getHello(): string {
    return this.appService.getHello();
  }
}
