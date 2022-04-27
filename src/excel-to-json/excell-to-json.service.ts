import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExcelToJson } from './excel-to-json.model';
import { Model } from 'mongoose';

@Injectable()
export class ExcelToJsonService {
  constructor(
    @InjectModel('ExcelToJson')
    private readonly excellToJsonModel: Model<ExcelToJson>,
  ) {}

  async insertData(firstName: string, lastName: string, age: number) {
    const newData = new this.excellToJsonModel({
      firstName,
      lastName,
      age,
    });
    const result = await newData.save();
    return (result?.id as string) ?? '';
  }
  async insertManyData(params: ExcelToJson[]) {
    const data = await this.excellToJsonModel.insertMany(params);
    return !!data.length;
  }
}
