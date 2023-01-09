import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FindManyOrgArgs } from '../@generated/org/find-many-org.args';
import { Org } from '../@generated/org/org.model';
import { UpsertOneOrgArgs } from '../@generated/org/upsert-one-org.args';
import { OrgService } from './org.service';

@Resolver(() => Org)
export class OrgResolver {
  constructor(private readonly orgService: OrgService) {}

  @Mutation(() => Org)
  upsertOrg(
    @Args() upsertOneOrgArgs: UpsertOneOrgArgs,
  ): Promise<Org> {
    return this.orgService.upsert(upsertOneOrgArgs);
  }

  @Query(() => [Org], { name: 'orgs' })
  findAll(@Args() findManyOrgArgs: FindManyOrgArgs) {
    return this.orgService.findAll(findManyOrgArgs);
  }

  // @Query(() => Org, { name: 'org' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.orgService.findOne(id);
  // }

  // @Mutation(() => Org)
  // updateOrg(@Args('updateOrgInput') updateOrgInput: OrgUpdateInput) {
  //   return this.orgService.update(updateOrgInput.id, updateOrgInput);
  // }

  // @Mutation(() => Org)
  // removeOrg(@Args('id', { type: () => Int }) id: number) {
  //   return this.orgService.remove(id);
  // }
}
