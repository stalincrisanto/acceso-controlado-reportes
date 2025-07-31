import { Injectable } from '@nestjs/common';
import { User, UserType } from 'src/domain/User/User';
import { UserRepository } from 'src/domain/User/UserRepository';
import { PrismaService } from 'src/infraestructure/shared/prisma/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(user: User): Promise<void> {
    const userData = user.toPrimitives();
    await this.prisma.users.create({
      data: userData,
    });
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.prisma.users.findFirst({
      where: { username },
    });
    return user
      ? User.fromPrimitives({ ...user, user_type: user.user_type as UserType })
      : null;
  }
}
