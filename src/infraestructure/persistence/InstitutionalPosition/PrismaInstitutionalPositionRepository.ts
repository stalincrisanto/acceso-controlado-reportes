import { Injectable } from '@nestjs/common';
import { InstitutionalPosition } from 'src/domain/InstitutionalPosition/InstitutionalPosition';
import { InstitutionalPositionRepository } from 'src/domain/InstitutionalPosition/InstitutionalPositionRepository';
import { PrismaService } from 'src/infraestructure/shared/prisma/prisma.service';

@Injectable()
export class PrismaInstitutionalPositionRepository
  implements InstitutionalPositionRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async save(institutionalPosition: InstitutionalPosition): Promise<void> {
    const institutionalPositionData = institutionalPosition.toPrimitives();
    await this.prisma.institutional_positions.create({
      data: institutionalPositionData,
    });
  }
}
