import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
