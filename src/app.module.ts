import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExcelToJsonModule } from './excel-to-json/excel-to-json.module';

@Module({
  imports: [
    ExcelToJsonModule,
    MongooseModule.forRoot(
      'mongodb+srv://akshar:GUlG2WQnWikhsLkD@cluster1.oqhms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
