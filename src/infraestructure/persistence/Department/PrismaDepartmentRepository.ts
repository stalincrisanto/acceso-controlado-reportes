import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Department } from "src/domain/Department/Department";
import { DepartmentRepository } from "src/domain/Department/DepartmentRepository";
import { PrismaService } from "src/infraestructure/shared/prisma/prisma.service";

@Injectable()
export class PrismaDepartmentRepository implements DepartmentRepository {

    constructor(private readonly prisma: PrismaService) { }

    async save(department: Department): Promise<void> {
        const departmentData = department.toPrimitives();
        await this.prisma.departments.create({
            data: departmentData
        });
    }

    findById(id: string): Promise<Department | null> {
        const prisma = new PrismaClient();
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Department[]> {
        throw new Error("Method not implemented.");
    }
}