/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Treatment as PrismaTreatment,
  Appointment as PrismaAppointment,
} from "@prisma/client";

export class TreatmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TreatmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.treatment.count(args);
  }

  async treatments(
    args: Prisma.TreatmentFindManyArgs
  ): Promise<PrismaTreatment[]> {
    return this.prisma.treatment.findMany(args);
  }
  async treatment(
    args: Prisma.TreatmentFindUniqueArgs
  ): Promise<PrismaTreatment | null> {
    return this.prisma.treatment.findUnique(args);
  }
  async createTreatment(
    args: Prisma.TreatmentCreateArgs
  ): Promise<PrismaTreatment> {
    return this.prisma.treatment.create(args);
  }
  async updateTreatment(
    args: Prisma.TreatmentUpdateArgs
  ): Promise<PrismaTreatment> {
    return this.prisma.treatment.update(args);
  }
  async deleteTreatment(
    args: Prisma.TreatmentDeleteArgs
  ): Promise<PrismaTreatment> {
    return this.prisma.treatment.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.treatment
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }
}
