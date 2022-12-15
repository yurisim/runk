import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { QuestionCreateInput } from 'prisma/@generated/question/question-create.input';
import { QuestionUpdateInput } from 'prisma/@generated/question/question-update.input';
import { Question } from 'prisma/@generated/question/question.model';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Mutation(() => Question)
  createQuestion(
    @Args('createQuestionInput') createQuestionInput: QuestionCreateInput
  ) {
    return this.questionService.create(createQuestionInput);
  }

  @Query(() => [Question], { name: 'question' })
  findAll() {
    return this.questionService.findAll();
  }

  @Query(() => Question, { name: 'question' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.questionService.findOne(id);
  }

  @Mutation(() => Question)
  updateQuestion(
    @Args('updateQuestionInput') updateQuestionInput: QuestionUpdateInput
  ) {
    return this.questionService.update(
      updateQuestionInput.id,
      updateQuestionInput
    );
  }

  @Mutation(() => Question)
  removeQuestion(@Args('id', { type: () => Int }) id: number) {
    return this.questionService.remove(id);
  }
}
