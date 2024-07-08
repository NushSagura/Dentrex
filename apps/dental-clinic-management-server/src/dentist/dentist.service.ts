import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DentistServiceBase } from "./base/dentist.service.base";

@Injectable()
export class DentistService extends DentistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
