import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TreatmentModuleBase } from "./base/treatment.module.base";
import { TreatmentService } from "./treatment.service";
import { TreatmentController } from "./treatment.controller";
import { TreatmentResolver } from "./treatment.resolver";

@Module({
  imports: [TreatmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [TreatmentController],
  providers: [TreatmentService, TreatmentResolver],
  exports: [TreatmentService],
})
export class TreatmentModule {}
