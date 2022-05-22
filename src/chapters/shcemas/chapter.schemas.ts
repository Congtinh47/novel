import { Schema } from 'mongoose';

export const ChapterSchema = new Schema({
  chapNumber: Number,
  title: String,
  content: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});
