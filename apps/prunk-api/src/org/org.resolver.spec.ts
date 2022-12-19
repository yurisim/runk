import { Test, TestingModule } from '@nestjs/testing';
import { OrgResolver } from './org.resolver';
import { OrgService } from './org.service';

describe('OrgResolver', () => {
  let resolver: OrgResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrgResolver,
        {
          provide: OrgService,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<OrgResolver>(OrgResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
