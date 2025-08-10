import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [UserService, PrismaService],
  controllers: []
})
export class UserModule {}
