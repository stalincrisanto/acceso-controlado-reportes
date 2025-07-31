import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infraestructure/shared/prisma/prisma.service';
import { INSTITUTIONAL_POSITION_REPOSITORY_TOKEN } from 'src/domain/shared/TokensForInyection';
import { InstitutionalPositionController } from '../controllers/InstitutionalPosition/InstitutionalPositionController';
import { InstitutionalPositionService } from 'src/application/InstitutionalPosition/InstitutionalPositionService';
import { PrismaInstitutionalPositionRepository } from 'src/infraestructure/persistence/InstitutionalPosition/PrismaInstitutionalPositionRepository';

@Module({
  controllers: [InstitutionalPositionController],
  providers: [
    InstitutionalPositionService,
    {
      provide: INSTITUTIONAL_POSITION_REPOSITORY_TOKEN,
      useClass: PrismaInstitutionalPositionRepository,
    },
    PrismaService,
  ],
})
export class InstitutionalPositionModule {}
