import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ResponseCreateInput } from '../@generated/response/response-create.input';
import { UpsertOneResponseArgs } from '../@generated/response/upsert-one-response.args';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResponseService {
  constructor(private prisma: PrismaService) {}

  upsert(upsertOneResponseArgs: UpsertOneResponseArgs) {
    return this.prisma.response
      .upsert(upsertOneResponseArgs as Prisma.ResponseUpsertArgs)
      .catch((error) => {
        console.log(error);
      });
  }
}
