import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { PersonCreateInput } from 'prisma/@generated/person/person-create.input';
import { PersonUpdateInput } from 'prisma/@generated/person/person-update.input';
import { Person } from 'prisma/@generated/person/person.model';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  createPerson(
    @Args('createPersonInput') createPersonInput: PersonCreateInput
  ) {
    return this.personService.create(createPersonInput);
  }

  @Query(() => [Person], { name: 'person' })
  findAll() {
    return this.personService.findAll();
  }

  @Query(() => Person, { name: 'person' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.personService.findOne(id);
  }

  @Mutation(() => Person)
  updatePerson(
    @Args('updatePersonInput') updatePersonInput: PersonUpdateInput
  ) {
    return this.personService.update(updatePersonInput.id, updatePersonInput);
  }

  @Mutation(() => Person)
  removePerson(@Args('id', { type: () => Int }) id: number) {
    return this.personService.remove(id);
  }
}
