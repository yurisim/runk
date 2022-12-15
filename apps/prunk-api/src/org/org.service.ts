import { Injectable } from '@nestjs/common';
import { OrgCreateInput } from 'prisma/@generated/org/org-create.input';
import { OrgUpdateInput } from 'prisma/@generated/org/org-update.input';
import { StringFieldUpdateOperationsInput } from 'prisma/@generated/prisma/string-field-update-operations.input';

@Injectable()
export class OrgService {
  create(createOrgInput: OrgCreateInput) {
    return 'This action adds a new org';
  }

  findAll() {
    return `This action returns all org`;
  }

  findOne(id: number) {
    return `This action returns a #${id} org`;
  }

  update(id: StringFieldUpdateOperationsInput, updateOrgInput: OrgUpdateInput) {
    return `This action updates a #${id} org`;
  }

  remove(id: number) {
    return `This action removes a #${id} org`;
  }
}
