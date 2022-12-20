import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrgService } from './org.service';
import { Org } from 'prisma/@generated/org/org.model';
import { OrgCreateInput } from 'prisma/@generated/org/org-create.input';
import { FindManyOrgArgs } from 'prisma/@generated/org/find-many-org.args';

@Resolver(() => Org)
export class OrgResolver {
  constructor(private readonly orgService: OrgService) {}

  @Mutation(() => Org)
  createOrg(
    @Args('createOrgInput') createOrgInput: OrgCreateInput
  ): Promise<Org> {
    return this.orgService.create(createOrgInput);
  }

  @Query(() => [Org], { name: 'orgs' })
  findAll(
    @Args() findManyOrgArgs: FindManyOrgArgs
  ) {
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
