import { Injectable } from '@nestjs/common';
import { OrgCreateInput } from 'prisma/@generated/org/org-create.input';
import { OrgUpdateInput } from 'prisma/@generated/org/org-update.input';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class OrgService {
  constructor(private prisma: PrismaService) {}
  create(createOrgInput: OrgCreateInput) {
    return this.prisma.org.create({
      data: createOrgInput,
    });
  }

  findAll() {
    return this.prisma.org.findMany();
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
