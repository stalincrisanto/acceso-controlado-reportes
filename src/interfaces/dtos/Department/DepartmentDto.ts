import { Transform } from "class-transformer";
import { IsDefined, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateDepartmentDto {
    @IsString()
    @Transform(({ value }) => value.trim())
    @IsDefined({ message: "El valor del nombre es obligatorio" })
    @IsNotEmpty({ message: "El valor del nombre no debe ser vacío" })
    public readonly name!: string;

    @IsString({ message: "El código de departamento es incorrecto" })
    @Transform(({ value }) => value.trim())
    public readonly code: string;
}