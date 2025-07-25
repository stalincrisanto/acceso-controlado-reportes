import { User } from "./User";

export interface UserRepository {
    save(user: User): Promise<void>;
    findByUsername(username: string): Promise<User | null>;
}