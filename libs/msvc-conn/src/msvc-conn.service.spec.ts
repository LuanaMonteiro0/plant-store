import { Test, TestingModule } from '@nestjs/testing';
import { MsvcConnService } from './msvc-conn.service';

describe('MsvcConnService', () => {
  let service: MsvcConnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsvcConnService],
    }).compile();

    service = module.get<MsvcConnService>(MsvcConnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
