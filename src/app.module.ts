import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsResolver } from './cars/cars.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CarsResolver],
})
export class AppModule {}
