import { Injectable } from '@nestjs/common';
import { ResponseCreateInput } from 'prisma/@generated/response/response-create.input';
import { ResponseUpdateInput } from 'prisma/@generated/response/response-update.input';
import { StringFieldUpdateOperationsInput } from 'prisma/@generated/prisma/string-field-update-operations.input';

@Injectable()
export class ResponseService {
  create(createResponseInput: ResponseCreateInput) {
    return 'This action adds a new response';
  }

  findAll() {
    return `This action returns all response`;
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }

  update(
    id: StringFieldUpdateOperationsInput,
    updateResponseInput: ResponseUpdateInput
  ) {
    return `This action updates a #${id} response`;
  }

  remove(id: number) {
    return `This action removes a #${id} response`;
  }
}