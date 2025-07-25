import { BadRequestException, Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { DepartmentService } from "src/application/Department/DepartmentService";
import { Department } from "src/domain/Department/Department";
import { CreateDepartmentDto } from "src/interfaces/dtos/Department/DepartmentDto";

@Controller("/department")
export class DepartmentController {
    constructor(private departmentService: DepartmentService) { }

    @Post()
    async createDeparment(@Body() departmentDto: CreateDepartmentDto): Promise<void> {
        try {
            const department = Department.fromPrimitives(departmentDto);
            await this.departmentService.departmentCreator(department);
        } catch (error) {
            // throw new HttpException('Error primero',HttpStatus.BAD_REQUEST);
            // throw new HttpException({message:error,status:4002, other:"other"}, HttpStatus.BAD_REQUEST);
            // throw new HttpException({
            //     status: HttpStatus.FORBIDDEN,
            //     error: 'This is a custom message',
            // }, HttpStatus.FORBIDDEN, {
            //     cause: error,
            //     description: "description error"
            // });
            // throw new BadRequestException({status: HttpStatus.BAD_REQUEST, error: "Falta algo"})
        }
    }
}