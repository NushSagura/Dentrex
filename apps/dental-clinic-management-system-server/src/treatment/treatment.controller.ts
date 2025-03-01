import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TreatmentService } from "./treatment.service";
import { TreatmentControllerBase } from "./base/treatment.controller.base";

@swagger.ApiTags("treatments")
@common.Controller("treatments")
export class TreatmentController extends TreatmentControllerBase {
  constructor(protected readonly service: TreatmentService) {
    super(service);
  }
}
