import { Injectable } from '@nestjs/common';
import { AnswerCreateInput } from 'prisma/@generated/answer/answer-create.input';
import { AnswerUpdateInput } from 'prisma/@generated/answer/answer-update.input';
import { StringFieldUpdateOperationsInput } from 'prisma/@generated/prisma/string-field-update-operations.input';

@Injectable()
export class AnswerService {
  create(createAnswerInput: AnswerCreateInput) {
    return 'This action adds a new answer';
  }

  findAll() {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  update(
    id: StringFieldUpdateOperationsInput,
    updateAnswerInput: AnswerUpdateInput
  ) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
