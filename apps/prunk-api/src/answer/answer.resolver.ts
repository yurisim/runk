import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Answer } from '../@generated/answer/answer.model';
import { AnswerService } from './answer.service';


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
