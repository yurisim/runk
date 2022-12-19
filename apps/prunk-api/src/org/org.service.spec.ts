import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { OrgService } from './org.service';

describe('OrgService', () => {
  let service: OrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrgService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<OrgService>(OrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
