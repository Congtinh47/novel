import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { CreateChapterDto } from './dto/chapter.dto';

@Controller('chapter')
export class ChaptersController {
  constructor(private chaptersService: ChaptersService) {}

  @Post()
  async create(@Res() res, @Body() createChapterDto: CreateChapterDto) {
    const chapter = this.chaptersService.create(createChapterDto);
    return res.status(HttpStatus.OK).json({
      message: 'chapter is created successfully',
      chapter: chapter,
    });
  }

  @Get('/:chapterId')
  async find(@Res() res, @Param('chapterId') chapterId: string) {
    const chapter = await this.chaptersService.find(chapterId);
    if (!chapter) throw new NotFoundException('chapter does not exists');
    return res.status(HttpStatus.OK).json(chapter);
  }

  @Get()
  async findAll(@Res() res) {
    const chapters = await this.chaptersService.findAll();
    if (!chapters) throw new NotFoundException('chapter does not exists');
    return res.status(HttpStatus.OK).json(chapters);
  }

  @Put()
  async update(
    @Res() res,
    @Param('chapterId') chapterId: string,
    @Body() createChapterDto: CreateChapterDto,
  ) {
    const chapter = await this.chaptersService.update(
      chapterId,
      createChapterDto,
    );
    if (!chapter) throw new NotFoundException('chapter does not exists');
    return res.status(HttpStatus.OK).json(chapter);
  }

  @Delete()
  async delete(@Res() res, @Param('chapterId') chapterId: string) {
    const chapter = await this.chaptersService.delete(chapterId);
    if (!chapter) throw new NotFoundException('delete chapter is successful');
    return res.status(HttpStatus.OK).json(chapter);
  }
}
