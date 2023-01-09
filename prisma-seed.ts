/* eslint-disable complexity */
import { PrismaClient, Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

//TODO refactor to not repeat code so much(DRY) - like the org/tag are done

const prisma = new PrismaClient();

const orgSeed: Prisma.OrgCreateInput[] = [
  // ADMIN
  {
    name: '552 ACNS',
    PAS: 'TE1CFKG8',
  },
  // Wings
  {
    name: '552 ACG',
    PAS: 'NOT-TE1CFKG8',
  },
  {
    name: '552 ACW',
    PAS: 'ALSO-NOT-TE1CFKG8',
  },
];

const personSeed: Prisma.PersonCreateInput[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    middleInitial: 'A',
    DODID: 1234567890,
    email: 'john.doe@us.af.mil',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    middleInitial: 'B',
    DODID: 1234567891,
    email: 'jane.doe@us.af.mil',
  },
  {
    firstName: 'Joe',
    lastName: 'Doe',
    middleInitial: 'C',
    DODID: 1234567892,
    email: 'joe.doe@us.af.mil',
  },
  {
    firstName: 'Jill',
    lastName: 'Doe',
    middleInitial: 'D',
    DODID: 1234567893,
    email: 'jill.doe@us.af.mil',
  },
  {
    firstName: 'Jack',
    lastName: 'Doe',
    middleInitial: 'E',
    DODID: 1234567894,
    email: 'jack.doe@us.af.mil',
  },
  {
    firstName: 'Jen',
    lastName: 'Doe',
    middleInitial: 'F',
    DODID: 1234567895,
    email: 'jen.doe@us.af.mil',
  },
];

export const questions: Prisma.QuestionCreateInput[] = [
  {
    value: 'Duty Title',
  },
  {
    value: 'DAFSC',
  },
  {
    value: 'Grade',
  },
  {
    value: 'FDID',
  },
  {
    value: 'Key Duties/Responsibilities',
  },
  {
    value: 'Performance Rating',
  },
  {
    value: 'Performance Comment',
  },
  {
    value: 'Followership/Leadership Rating',
  },
  {
    value: 'Followership/Leadership Comment',
  },
  {
    value: 'Whole Airman Rating',
  },
  {
    value: 'Whole Airman Comment',
  },
  {
    value: 'Overall Rating',
  },
];

async function main() {
  // Upsert Orgs
  for (const org of orgSeed) {
    try {
      await prisma.org.upsert({
        where: {
          name: org.name,
        },
        update: {},
        create: {
          name: org.name,
          PAS: org.PAS,
        },
      });
    } catch (e) {
      if (!(e instanceof PrismaClientKnownRequestError)) {
        throw e;
      }
    }
  }

  for (const person of personSeed) {
    try {
      await prisma.person.upsert({
        where: {
          DODID: person.DODID,
        },
        update: {},
        create: {
          firstName: person.firstName,
          lastName: person.lastName,
          middleInitial: person.middleInitial,
          DODID: person.DODID,
          email: person.email,
        },
      });
    } catch (e) {
      if (!(e instanceof PrismaClientKnownRequestError)) {
        throw e;
      }
    }
  }

  for (const question of questions) {
    try {
      await prisma.question.upsert({
        where: {
          value: question.value,
        },
        update: {},
        create: {
          value: question.value,
        },
      });
    } catch (e) {
      if (!(e instanceof PrismaClientKnownRequestError)) {
        throw e;
      }
    }
  }

  try {
    await prisma.form.upsert({
      where: {
        version: 1,
      },
      update: {},
      create: {
        version: 1,
        questions: {
          connect: [...questions],
        },
      },
    });
  } catch (e) {
    if (!(e instanceof PrismaClientKnownRequestError)) {
      throw e;
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
