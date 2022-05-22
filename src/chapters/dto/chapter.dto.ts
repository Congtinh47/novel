import { Document } from 'mongoose';

export class CreateChapterDto {
  readonly chapNumber: Number;
  readonly title: string;
  readonly content: string;
  readonly createAt: Date;
}
