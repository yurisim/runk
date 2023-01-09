import { Injectable } from '@nestjs/common';
import { FormCreateInput } from '../@generated/form/form-create.input';
import { FormUpdateInput } from '../@generated/form/form-update.input';
import { StringFieldUpdateOperationsInput } from '../@generated/prisma/string-field-update-operations.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FormService {

  constructor(private prisma: PrismaService) {}

  create(createFormInput: FormCreateInput) {
    // return this.prisma.form.create({
    //   data: {

    //   })
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
