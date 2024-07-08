import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DentistWhereUniqueInput } from "../dentist/DentistWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutAppointmentsInput } from "./InvoiceCreateNestedManyWithoutAppointmentsInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  time?: string | null;
  patient?: PatientWhereUniqueInput | null;
  dentist?: DentistWhereUniqueInput | null;
  invoices?: InvoiceCreateNestedManyWithoutAppointmentsInput;
};
