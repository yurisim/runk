import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormService, PrismaService],
    }).compile();

    service = module.get<FormService>(FormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
