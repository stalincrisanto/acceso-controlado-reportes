import { Inject, Injectable } from '@nestjs/common';
import { InstitutionalPosition } from 'src/domain/InstitutionalPosition/InstitutionalPosition';
import { InstitutionalPositionRepository } from 'src/domain/InstitutionalPosition/InstitutionalPositionRepository';
import { INSTITUTIONAL_POSITION_REPOSITORY_TOKEN } from 'src/domain/shared/TokensForInyection';

@Injectable()
export class InstitutionalPositionService {
  constructor(
    @Inject(INSTITUTIONAL_POSITION_REPOSITORY_TOKEN)
    private readonly departmentRepository: InstitutionalPositionRepository,
  ) {}

  async institutionalPositionCreator(
    institutionalPosition: InstitutionalPosition,
  ) {
    try {
      const newInstitutionalPosition = InstitutionalPosition.fromPrimitives(
        institutionalPosition,
      );
      await this.departmentRepository.save(newInstitutionalPosition);
    } catch (error) {
      throw new Error(
        `Error al crear el cargo institucional: ${error.message}`,
      );
    }
  }
}
