import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DentistService } from "./dentist.service";
import { DentistControllerBase } from "./base/dentist.controller.base";

@swagger.ApiTags("dentists")
@common.Controller("dentists")
export class DentistController extends DentistControllerBase {
  constructor(
    protected readonly service: DentistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
