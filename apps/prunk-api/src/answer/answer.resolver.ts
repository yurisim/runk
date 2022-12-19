import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnswerService } from './answer.service';
import { Answer } from 'prisma/@generated/answer/answer.model';
import { AnswerCreateInput } from 'prisma/@generated/answer/answer-create.input';
import { AnswerUpdateInput } from 'prisma/@generated/answer/answer-update.input';

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  // @Mutation(() => Answer)
  // createAnswer(
  //   @Args('createAnswerInput') createAnswerInput: AnswerCreateInput
  // ) {
  //   return this.answerService.create(createAnswerInput);
  // }

  // @Query(() => [Answer], { name: 'answer' })
  // findAll() {
  //   return this.answerService.findAll();
  // }

  // @Query(() => Answer, { name: 'answer' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.answerService.findOne(id);
  // }

  // @Mutation(() => Answer)
  // updateAnswer(
  //   @Args('updateAnswerInput') updateAnswerInput: AnswerUpdateInput
  // ) {
  //   return this.answerService.update(updateAnswerInput.id, updateAnswerInput);
  // }

  // @Mutation(() => Answer)
  // removeAnswer(@Args('id', { type: () => Int }) id: number) {
  //   return this.answerService.remove(id);
  // }
}
