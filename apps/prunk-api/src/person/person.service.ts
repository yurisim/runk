import { Injectable } from '@nestjs/common';
import { FindManyPersonArgs } from '../@generated/person/find-many-person.args';
import { FindUniquePersonArgs } from '../@generated/person/find-unique-person.args';
import { UpdateOnePersonArgs } from '../@generated/person/update-one-person.args';
import { UpsertOnePersonArgs } from '../@generated/person/upsert-one-person.args';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  upsert(upsertOnePersonArgs: UpsertOnePersonArgs) {
    return this.prisma.person.upsert(upsertOnePersonArgs);
  }

  findMany(findManyPersonArgs: FindManyPersonArgs) {
    return this.prisma.person.findMany(findManyPersonArgs);
  }

  findOne(findUniquePersonArgs: FindUniquePersonArgs) {
    return this.prisma.person.findUnique(findUniquePersonArgs);
  }

  // update(
  //   updateOnePersonArgs: UpdateOnePersonArgs
  // ) {
  //   return this.prisma.person.update(updateOnePersonArgs);
  // }
}
