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
  grade!: Grade;
  org!: string;
  DODID!: string;
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

export enum Grade {
  E1 = 'E1',
  E2 = 'E2',
  E3 = 'E3',
  E4 = 'E4',
  E5 = 'E5',
  E6 = 'E6',
  E7 = 'E7',
  E8 = 'E8',
  E9 = 'E9',
}
