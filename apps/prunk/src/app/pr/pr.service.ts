import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Grade,
  UpsertPersonPrDocument,
  UpsertPersonPrMutation,
  UpsertPersonPrMutationVariables,
} from '../../@generated/generated';

@Injectable({
  providedIn: 'root',
})
export class PrService {
  constructor(private apollo: Apollo) {}
  submitPerson() {
    console.log('haha');

    return this.apollo.mutate<
      UpsertPersonPrMutation,
      UpsertPersonPrMutationVariables
    >({
      mutation: UpsertPersonPrDocument,
      variables: {
        create: {
          afsc: '1D7X1Z',
          email: 'matthew.eichler@us.af.mil',
          firstName: 'Matthew',
          grade: Grade.E8,
          lastName: 'Eichler',
          org: {
            connectOrCreate: {
              create: {
                FDID: 'TC1778',
                PAS: 'T76889',
                name: '552 ACNS',
              },
              where: {
                name: '552 ACNS',
              },
            },
          },
          ssn: 7897987,
        },
        update: {},
        where: {
          email: 'matthew.eichler@us.af.mil',
        },
      },
    }).subscribe();
  }
}
