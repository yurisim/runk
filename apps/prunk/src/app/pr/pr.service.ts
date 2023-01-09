import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  UpsertOrgPrDocument,
  UpsertOrgPrMutation,
  UpsertOrgPrMutationVariables,
  UpsertPersonPrDocument,
  UpsertPersonPrMutation,
  UpsertPersonPrMutationVariables,
  UpsertResponsePrDocument,
  UpsertResponsePrMutation,
  UpsertResponsePrMutationVariables,
} from '../../@generated/generated';

@Injectable({
  providedIn: 'root',
})
export class PrService {
  constructor(private apollo: Apollo) {}
  upsertPerson(personUpsertInput: UpsertPersonPrMutationVariables) {
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

  upsertOrg(upsertOrgPrMutationVariables: UpsertOrgPrMutationVariables) {
    return this.apollo
      .mutate<UpsertOrgPrMutation, UpsertOrgPrMutationVariables>({
        mutation: UpsertOrgPrDocument,
        variables: upsertOrgPrMutationVariables,
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

  upsertResponse(
    upsertResponsePrMutationVariables: UpsertResponsePrMutationVariables
  ) {
    console.log(upsertResponsePrMutationVariables);

    return this.apollo
      .mutate<UpsertResponsePrMutation, UpsertResponsePrMutationVariables>({
        mutation: UpsertResponsePrDocument,
        variables: upsertResponsePrMutationVariables,
        errorPolicy: 'all',
      })
      .subscribe(
        // print errors if they exist
        ({ errors }) => {
          if (errors) {
            console.log(JSON.stringify(errors, null, 2));
          }
        }
      );
  }

  // getPASCode(orgsPrQueryVariables: OrgsPrQueryVariables) {
  //   console.log('hello')
  //   return this.apollo
  //     .watchQuery<OrgsPrQuery, OrgsPrQueryVariables>({
  //       query: OrgsPrDocument,
  //       variables: orgsPrQueryVariables,
  //     })
  //     .valueChanges.pipe(map((result) => result.data.orgs));
  // }
}
