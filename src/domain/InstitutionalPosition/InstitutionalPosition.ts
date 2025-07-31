import { Primitives } from 'src/domain/shared/Primitives';

export class InstitutionalPosition {
  constructor(
    public readonly name: string,
    public readonly code: string | undefined,
  ) {}

  static fromPrimitives(
    primitives: Primitives<InstitutionalPosition>,
  ): InstitutionalPosition {
    return new InstitutionalPosition(
      primitives.name,
      primitives?.code || undefined,
    );
  }

  toPrimitives(): Primitives<InstitutionalPosition> {
    return {
      name: this.name,
      code: this.code,
    };
  }
}
