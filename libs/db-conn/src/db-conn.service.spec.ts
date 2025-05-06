import { Test, TestingModule } from '@nestjs/testing';
import { DbConnService } from './db-conn.service';

describe('DbConnService', () => {
  let service: DbConnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbConnService],
    }).compile();

    service = module.get<DbConnService>(DbConnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
