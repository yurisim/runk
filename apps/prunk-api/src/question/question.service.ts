import { Injectable } from '@nestjs/common';
import { StringFieldUpdateOperationsInput } from '../@generated/prisma/string-field-update-operations.input';
import { QuestionCreateInput } from '../@generated/question/question-create.input';
import { QuestionUpdateInput } from '../@generated/question/question-update.input';

@Injectable()
export class QuestionService {
  create(createQuestionInput: QuestionCreateInput) {
    return 'This action adds a new question';
  }

  findAll() {
    return `This action returns all question`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(
    id: StringFieldUpdateOperationsInput,
    updateQuestionInput: QuestionUpdateInput
  ) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
