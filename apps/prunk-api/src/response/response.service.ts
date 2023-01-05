import { Injectable } from '@nestjs/common';
import { StringFieldUpdateOperationsInput } from '../@generated/prisma/string-field-update-operations.input';
import { ResponseCreateInput } from '../@generated/response/response-create.input';
import { ResponseUpdateInput } from '../@generated/response/response-update.input';
import { UpsertOneResponseArgs } from '../@generated/response/args/upsert-one-response.args';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResponseService {
  constructor(private prisma: PrismaService) {}

  create(createResponseInput: ResponseCreateInput) {
    return this.prisma.response.create({
      data: createResponseInput,
    })
  }

  upsert(upsertOnePersonArgs: UpsertOneResponseArgs) {
    return this.prisma.person.upsert(upsertOnePersonArgs);
  }

  findAll() {
    return `This action returns all response`;
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }
}
