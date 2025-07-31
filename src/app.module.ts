import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./infraestructure/shared/prisma/prisma.module";
import { DepartmentModule } from "./interfaces/modules/DepartmentModule";
import { InstitutionalPositionModule } from "./interfaces/modules/InstitutionalPositionModule";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    DepartmentModule,
    InstitutionalPositionModule
  ],
})
export class AppModule {}