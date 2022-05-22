import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersController } from './chapters.controller';
import { ChaptersService } from './chapters.service';
import { ChapterSchema } from './shcemas/chapter.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chapter', schema: ChapterSchema }]),
  ],
  controllers: [ChaptersController],
  providers: [ChaptersService],
})
export class ChapterModule {}
