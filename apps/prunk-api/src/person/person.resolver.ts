import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FindManyPersonArgs } from '../@generated/person/find-many-person.args';
import { FindUniquePersonArgs } from '../@generated/person/find-unique-person.args';
import { Person } from '../@generated/person/person.model';
import { UpsertOnePersonArgs } from '../@generated/person/upsert-one-person.args';
import { PersonService } from './person.service';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  upsertPerson(
    @Args() upsertOnePersonArgs: UpsertOnePersonArgs
  ) {
    return this.personService.upsert(upsertOnePersonArgs);
  }

  @Query(() => [Person], { name: 'people' })
  findAll(@Args() findManyPersonArgs: FindManyPersonArgs) {
    return this.personService.findMany(findManyPersonArgs);
  }

  @Query(() => Person, { name: 'person' })
  findOne(@Args() findUniquePersonArgs: FindUniquePersonArgs) {
    return this.personService.findOne(findUniquePersonArgs);
  }

  // @Mutation(() => Person)
  // updatePerson(
  //   @Args('updatePersonInput') updatePersonInput: PersonUpdateInput
  // ) {
  //   return this.personService.update(updatePersonInput.id, updatePersonInput);
  // }

  // @Mutation(() => Person)
  // removePerson(@Args('id', { type: () => Int }) id: number) {
  //   return this.personService.remove(id);
  // }
}
