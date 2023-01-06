import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ResponseCreateInput } from '../@generated/response/response-create.input';
import { UpsertOneResponseArgs } from '../@generated/response/upsert-one-response.args';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResponseService {
  constructor(private prisma: PrismaService) {}

  create(createResponseInput: ResponseCreateInput) {
    return this.prisma.response.create({
      data: createResponseInput,
    });
  }

  upsert(upsertOneResponseArgs: UpsertOneResponseArgs) {
    return this.prisma.response.upsert(upsertOneResponseArgs as Prisma.ResponseUpsertArgs);
  }

  findAll() {
    return `This action returns all response`;
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }
}
