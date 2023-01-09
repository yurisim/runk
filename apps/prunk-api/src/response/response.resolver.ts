import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ResponseService } from './response.service';
import { Response } from '../@generated/response/response.model';
import { UpsertOneResponseArgs } from '../@generated/response/upsert-one-response.args';

@Resolver(() => Response)
export class ResponseResolver {
  constructor(private readonly responseService: ResponseService) {}

  @Mutation(() => Response)
  upsertResponse(
    @Args() upsertOneResponseArgs: UpsertOneResponseArgs
  ) {
    return this.responseService.upsert(upsertOneResponseArgs);
  }

  // @Query(() => [Response], { name: 'response' })
  // findAll() {
  //   return this.responseService.findAll();
  // }

  // @Query(() => Response, { name: 'response' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.responseService.findOne(id);
  // }

  // @Mutation(() => Response)
  // updateResponse(
  //   @Args('updateResponseInput') updateResponseInput: ResponseUpdateInput
  // ) {
  //   return this.responseService.update(
  //     updateResponseInput.id,
  //     updateResponseInput
  //   );
  // }

  // @Mutation(() => Response)
  // removeResponse(@Args('id', { type: () => Int }) id: number) {
  //   return this.responseService.remove(id);
  // }
}
