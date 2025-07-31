import { Department } from "src/domain/Department/Department";
import { InstitutionalPosition } from "src/domain/InstitutionalPosition/InstitutionalPosition";
import { User } from "src/domain/User/User";

export class GetUserDto {
    constructor(
        public readonly user: User,
        public readonly department: Department,
        public readonly institutionalPosition: InstitutionalPosition
    ){}
}