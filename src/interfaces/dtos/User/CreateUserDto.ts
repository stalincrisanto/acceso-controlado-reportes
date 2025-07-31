import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsDefined({ message: 'El valor del nombre es obligatorio' })
  @IsNotEmpty({ message: 'El valor del nombre no debe ser vacío' })
  public readonly name!: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @IsDefined({ message: 'El valor del apellido es obligatorio' })
  @IsNotEmpty({ message: 'El valor del apellido no debe ser vacío' })
  public readonly lastname!: string;

  @IsString()
  public readonly profilePicture: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @IsDefined({ message: 'El valor del usuario es obligatorio' })
  @IsNotEmpty({ message: 'El valor del usuario no debe ser vacío' })
  public readonly username!: string;

  @IsEmail()
  @Transform(({ value }) => value.trim())
  public readonly email: string;

  @IsString()
  @IsDefined({ message: 'El valor de la contraseña es obligatorio' })
  @IsNotEmpty({ message: 'El valor de la contraseña no debe ser vacío' })
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres',
  })
  public readonly passwordHash!: string;

  @IsEnum(
    { interno: 'internal', externo: 'external' },
    { message: 'El tipo de usuario debe ser internal o external' },
  )
  @IsDefined({ message: 'El valor del tipo de usuario es obligatorio' })
  public readonly userType!: string;

  @IsInt({ message: 'El ID del departamento debe ser un número entero' })
  public readonly departmentId?: number;

  @IsInt({ message: 'El ID del cargo debe ser un número entero' })
  public readonly institutionalPositionId?: number;
}
