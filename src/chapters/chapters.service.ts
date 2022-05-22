import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChapterDto } from './dto/chapter.dto';
import { Chapter } from './interfaces/chapter.interface';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectModel('Chapter') private readonly chapterModel: Model<Chapter>,
  ) {}

  async create(createChapterDto: CreateChapterDto): Promise<Chapter> {
    const chapter = new this.chapterModel(createChapterDto);
    await chapter.save();
    return chapter;
  }

  async find(chapterId: string): Promise<Chapter> {
    const chapter = await this.chapterModel.findById(chapterId);
    return chapter;
  }

  async findAll(): Promise<Chapter[]> {
    const chapters = await this.chapterModel.find();
    return chapters;
  }

  async update(
    chapterId: string,
    createChapterDto: CreateChapterDto,
  ): Promise<Chapter> {
    const updatedChapter = await this.chapterModel.findByIdAndUpdate(
      chapterId,
      createChapterDto,
      { new: true },
    );
    return updatedChapter;
  }

  async delete(chapterId: string): Promise<Chapter> {
    const deletedChapter = await this.chapterModel.findByIdAndDelete(chapterId);
    return deletedChapter;
  }
}
