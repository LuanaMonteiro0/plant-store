import { Module } from '@nestjs/common';
import { DbConnService } from './db-conn.service';

@Module({
  providers: [DbConnService],
  exports: [DbConnService],
})
export class DbConnModule {}
