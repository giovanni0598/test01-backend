import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeModule } from './exchange/exchange.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ExchangeModule,
    SwaggerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}