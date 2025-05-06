import { Module } from '@nestjs/common';
import { MsvcConnService } from './msvc-conn.service';

@Module({
  providers: [MsvcConnService],
  exports: [MsvcConnService],
})
export class MsvcConnModule {}
