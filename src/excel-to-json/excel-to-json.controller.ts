import { Controller, Get } from '@nestjs/common';
import * as xlsx from 'xlsx';
import { ExcelToJson } from './excel-to-json.model';
import { ExcelToJsonService } from './excell-to-json.service';

@Controller()
export class ExcelToJsonController {
  constructor(private readonly excellToJsonService: ExcelToJsonService) {}

  @Get('/readexcell')
  async addInformation() {
    const parsedData = this.convertExcelToJson();
    const res = await this.excellToJsonService.insertManyData(parsedData);
    return { message: res ? 'Data Added' : 'Unable to Add data.' };
  }

  public convertExcelToJson(): ExcelToJson[] {
    const file = xlsx.readFile('src/Data/Data.xlsx');

    const firstSheet = file.Sheets['Sheet1'];
    const parsedData = xlsx.utils.sheet_to_json(firstSheet, { raw: false });
    return parsedData as ExcelToJson[];
  }
}
