import {
  BadRequestException,
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { DepartmentService } from 'src/application/Department/DepartmentService';
import { UserService } from 'src/application/User/UserService';
import { Department } from 'src/domain/Department/Department';
import { User, UserType } from 'src/domain/User/User';
import { CreateDepartmentDto } from 'src/interfaces/dtos/Department/DepartmentDto';
import { CreateUserDto } from 'src/interfaces/dtos/User/UserDto';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createDeparment(@Body() userDto: CreateUserDto): Promise<void> {
    const user = User.fromPrimitives({
      ...userDto,
      user_type: userDto.user_type as UserType,
      department_id: userDto.department_id ? userDto.department_id : null,
    });
    await this.userService.userCreator(user);
  }
}
