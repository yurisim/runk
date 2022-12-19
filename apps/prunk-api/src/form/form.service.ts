import { Injectable } from '@nestjs/common';
import { FormCreateInput } from 'prisma/@generated/form/form-create.input';
import { FormUpdateInput } from 'prisma/@generated/form/form-update.input';
import { StringFieldUpdateOperationsInput } from 'prisma/@generated/prisma/string-field-update-operations.input';

@Injectable()
export class FormService {
  create(createFormInput: FormCreateInput) {
    return 'This action adds a new form';
  }

  findAll() {
    return `This action returns all form`;
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(
    id: StringFieldUpdateOperationsInput,
    updateFormInput: FormUpdateInput
  ) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
