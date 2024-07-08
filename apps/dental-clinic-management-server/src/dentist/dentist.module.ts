import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DentistModuleBase } from "./base/dentist.module.base";
import { DentistService } from "./dentist.service";
import { DentistController } from "./dentist.controller";
import { DentistResolver } from "./dentist.resolver";

@Module({
  imports: [DentistModuleBase, forwardRef(() => AuthModule)],
  controllers: [DentistController],
  providers: [DentistService, DentistResolver],
  exports: [DentistService],
})
export class DentistModule {}
