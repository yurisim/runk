import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  UpsertPersonPrDocument,
  UpsertPersonPrMutation,
  UpsertPersonPrMutationVariables,
} from '../../@generated/generated';

@Injectable({
  providedIn: 'root',
})
export class PrService {
  constructor(private apollo: Apollo) {}
  submitPerson(personUpsertInput: UpsertPersonPrMutationVariables) {
    return this.apollo
      .mutate<UpsertPersonPrMutation, UpsertPersonPrMutationVariables>({
        mutation: UpsertPersonPrDocument,
        variables: personUpsertInput,
        errorPolicy: 'all',
      })
      .subscribe(
        // print errors if they exist
        ({ errors }) => {
          if (errors) {
            console.log(errors);
          }
        }
      );
  }
}
