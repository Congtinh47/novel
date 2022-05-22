import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChapterModule } from '../chapters/chapters.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    ProductModule,
    ChapterModule,
    MongooseModule.forRoot('mongodb://localhost/products-nest-tutorial'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
