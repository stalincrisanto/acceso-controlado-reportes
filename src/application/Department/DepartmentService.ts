import { Inject, Injectable } from "@nestjs/common";
import { Department } from "src/domain/Department/Department";
import { DepartmentRepository } from "src/domain/Department/DepartmentRepository";
import { DEPARTMENT_REPOSITORY_TOKEN } from "src/domain/shared/TokensForInyection";

@Injectable()
export class DepartmentService {
    constructor(
        @Inject(DEPARTMENT_REPOSITORY_TOKEN)
        private readonly departmentRepository: DepartmentRepository) { }

    async departmentCreator(department: Department) {
        const newDepartment = Department.fromPrimitives(department);
        await this.departmentRepository.save(newDepartment);
    }
}