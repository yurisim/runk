import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseService } from './response.service';

describe('ResponseService', () => {
  let service: ResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseService, PrismaService],
    }).compile();

    service = module.get<ResponseService>(ResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
