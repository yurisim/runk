import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { PrismaModule } from '../prisma/prisma.module';
import { OrgModule } from '../org/org.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: true,
    }),
    PrismaModule,
    OrgModule,
    AuthzModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
1;
