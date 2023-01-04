import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Form } from '../@generated/form/form.model';
import { FormService } from './form.service';


@Resolver(() => Form)
export class FormResolver {
  constructor(private readonly formService: FormService) {}

  // @Mutation(() => Form)
  // createForm(@Args('createFormInput') createFormInput: FormCreateInput) {
  //   return this.formService.create(createFormInput);
  // }

  // @Query(() => [Form], { name: 'form' })
  // findAll() {
  //   return this.formService.findAll();
  // }

  // @Query(() => Form, { name: 'form' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.formService.findOne(id);
  // }

  // @Mutation(() => Form)
  // updateForm(@Args('updateFormInput') updateFormInput: FormUpdateInput) {
  //   return this.formService.update(updateFormInput.id, updateFormInput);
  // }

  // @Mutation(() => Form)
  // removeForm(@Args('id', { type: () => Int }) id: number) {
  //   return this.formService.remove(id);
  // }
}
