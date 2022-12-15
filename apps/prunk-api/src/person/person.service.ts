import { Injectable } from '@nestjs/common';
import { PersonCreateInput } from 'prisma/@generated/person/person-create.input';
import { PersonUpdateInput } from 'prisma/@generated/person/person-update.input';
import { StringFieldUpdateOperationsInput } from 'prisma/@generated/prisma/string-field-update-operations.input';

@Injectable()
export class PersonService {
  create(createPersonInput: PersonCreateInput) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: StringFieldUpdateOperationsInput, updatePersonInput: PersonUpdateInput) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
