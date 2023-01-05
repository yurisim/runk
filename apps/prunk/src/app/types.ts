export class QA {
  question!: string;
  answer!: string;
}
export class Person {
  firstName!: string;
  middleInitial!: string | null;
  lastName!: string;
  branch!: string;
  DAFSC!: string;
  grade!: string;
  org!: string;
  SSN!: string;
  dutyTitle!: string;
  signature!: string;
  role?: Role;
}

export enum Role {
  RATEE = 0,
  RATER = 1,
  ADDITIONAL = 2,
  CC = 3,
}
