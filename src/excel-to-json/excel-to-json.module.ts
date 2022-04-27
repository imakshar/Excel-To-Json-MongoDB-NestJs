import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ExcelToJsonController } from './excel-to-json.controller';
import { ExcelSchema } from './excel-to-json.model';
import { ExcelToJsonService } from './excell-to-json.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ExcelToJson', schema: ExcelSchema }]),
  ],
  controllers: [ExcelToJsonController],
  providers: [ExcelToJsonService],
})
export class ExcelToJsonModule {}
