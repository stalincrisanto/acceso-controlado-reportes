import { Body, Controller, Post } from '@nestjs/common';
import { InstitutionalPositionService } from 'src/application/InstitutionalPosition/InstitutionalPositionService';
import { InstitutionalPosition } from 'src/domain/InstitutionalPosition/InstitutionalPosition';
import { CreateInstitutionalPositionDto } from 'src/interfaces/dtos/InstitutionalPosition/CreateInstitutionalPositionDto';

@Controller('/institutionalPosition')
export class InstitutionalPositionController {
  constructor(
    private institutionalPositionService: InstitutionalPositionService,
  ) {}

  @Post()
  async createInstitutionalPosition(
    @Body() institutionalPositionDto: CreateInstitutionalPositionDto,
  ): Promise<void> {
    const institutionalPosition = InstitutionalPosition.fromPrimitives(
      institutionalPositionDto,
    );
    await this.institutionalPositionService.institutionalPositionCreator(
      institutionalPosition,
    );
  }
}
