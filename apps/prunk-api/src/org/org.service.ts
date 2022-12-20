import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrgService {
  constructor(private prisma: PrismaService) {}
  create(createOrgInput: Prisma.OrgCreateInput) {
    return this.prisma.org.create({
      data: createOrgInput,
    });
  }

  findAll(orgFindManyArgs: Prisma.OrgFindManyArgs) {
    return this.prisma.org.findMany(orgFindManyArgs);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} org`;
  // }

  // update(updateOneOrgArgs: Prisma.UpdateOneOrgArgs) {
  //   return 'updateOneOrgArgs'
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} org`;
  // }
}
