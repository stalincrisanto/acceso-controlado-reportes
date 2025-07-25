import { Primitives } from '../shared/Primitives';

export class User {
  constructor(
    public readonly name: string,
    public readonly lastname: string,
    public readonly profile_picture: string | null,
    public readonly username: string,
    public readonly email: string,
    public readonly password_hash: string,
    public readonly user_type: UserType,
    public readonly department_id: number | null,
  ) {}

  static fromPrimitives(primitives: Primitives<User>): User {
    return new User(
      primitives.name,
      primitives.lastname,
      primitives.profile_picture,
      primitives.username,
      primitives.email,
      primitives.password_hash,
      primitives.user_type,
      primitives.department_id,
    );
  }

  toPrimitives() {
    return {
      name: this.name,
      lastname: this.lastname,
      profile_picture: this.profile_picture,
      username: this.username,
      email: this.email,
      password_hash: this.password_hash,
      user_type: this.user_type,
      department_id: this.department_id,
    };
  }
}

export enum UserType {
  INTERNO = 'interno',
  EXTERNO = 'externo',
}