import { Transform } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateInstitutionalPositionDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsDefined({ message: 'El valor del nombre es obligatorio' })
  @IsNotEmpty({ message: 'El valor del nombre no debe ser vacío' })
  public readonly name!: string;

  @IsOptional()
  public readonly code: string;
}
