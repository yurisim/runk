import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Question } from '../@generated/question/question.model';
import { QuestionService } from './question.service';


@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  // @Mutation(() => Question)
  // createQuestion(
  //   @Args('createQuestionInput') createQuestionInput: QuestionCreateInput
  // ) {
  //   return this.questionService.create(createQuestionInput);
  // }

  // @Query(() => [Question], { name: 'question' })
  // findAll() {
  //   return this.questionService.findAll();
  // }

  // @Query(() => Question, { name: 'question' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.questionService.findOne(id);
  // }

  // @Mutation(() => Question)
  // updateQuestion(
  //   @Args('updateQuestionInput') updateQuestionInput: QuestionUpdateInput
  // ) {
  //   return this.questionService.update(
  //     updateQuestionInput.id,
  //     updateQuestionInput
  //   );
  // }

  // @Mutation(() => Question)
  // removeQuestion(@Args('id', { type: () => Int }) id: number) {
  //   return this.questionService.remove(id);
  // }
}
