export class QA {
  question!: string;
  answer!: string;
}
export class PersonData {
  firstName!: string;
  middleInitial?: string;
  lastName!: string;
  branch!: string;
  DAFSC!: string;
  grade!: string;
  org!: string;
  SSN!: string;
  dutyTitle!: string;
  signature!: string;
  role!: Roles;
}

export enum Roles {
  RATER,
  RATEE,
  CC,
  ADDITIONAL
}
