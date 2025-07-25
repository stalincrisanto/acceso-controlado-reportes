import { Module } from "@nestjs/common";
import { DepartmentController } from "../controllers/Department/DepartmentController";
import { DepartmentService } from "src/application/Department/DepartmentService";
import { PrismaDepartmentRepository } from "src/infraestructure/persistence/Department/PrismaDepartmentRepository";
import { PrismaService } from "src/infraestructure/shared/prisma/prisma.service";
import { DEPARTMENT_TOKEN } from "src/domain/Department/DepartmentTokens";

@Module({
    controllers: [DepartmentController],
    providers: [
        DepartmentService,
        {
            provide: DEPARTMENT_TOKEN,
            useClass: PrismaDepartmentRepository
        },
        PrismaService
    ]
})
export class DepartmentModule { }