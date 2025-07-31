import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/domain/User/User";
import { UserRepository } from "src/domain/User/UserRepository";
import { USER_REPOSITORY_TOKEN } from "src/domain/shared/TokensForInyection";

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_REPOSITORY_TOKEN)
        private readonly userRepository: UserRepository) { }

    async userCreator(user: User) {
        const newUser = User.fromPrimitives(user);
        await this.userRepository.save(newUser);
    }
}