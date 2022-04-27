import * as mongoose from 'mongoose';

export const ExcelSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
});

export interface ExcelToJson extends mongoose.Document {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}
