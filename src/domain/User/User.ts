import { Primitives } from '../shared/Primitives';

export class User {
  constructor(
    public readonly name: string,
    public readonly lastname: string,
    public readonly profilePicture: string | null,
    public readonly username: string,
    public readonly email: string,
    public readonly passwordHash: string,
    public readonly userType: UserType,
    public readonly departmentId: number | null,
    public readonly institutionalPositionId: number | null
  ) {}

  static fromPrimitives(primitives: Primitives<User>): User {
    return new User(
      primitives.name,
      primitives.lastname,
      primitives.profilePicture,
      primitives.username,
      primitives.email,
      primitives.passwordHash,
      primitives.userType,
      primitives.departmentId || null,
      primitives.institutionalPositionId || null
    );
  }

  toPrimitives() {
    return {
      name: this.name,
      lastname: this.lastname,
      profilePicture: this.profilePicture,
      username: this.username,
      email: this.email,
      passwordHash: this.passwordHash,
      userType: this.userType,
      departmentId: this.departmentId || null,
      institutionalPositionId: this.institutionalPositionId || null
    };
  }
}

export enum UserType {
  INTERNO = 'interno',
  EXTERNO = 'externo',
}