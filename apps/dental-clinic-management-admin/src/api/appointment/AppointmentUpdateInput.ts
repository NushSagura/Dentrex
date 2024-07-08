import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DentistWhereUniqueInput } from "../dentist/DentistWhereUniqueInput";
import { InvoiceUpdateManyWithoutAppointmentsInput } from "./InvoiceUpdateManyWithoutAppointmentsInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  time?: string | null;
  patient?: PatientWhereUniqueInput | null;
  dentist?: DentistWhereUniqueInput | null;
  invoices?: InvoiceUpdateManyWithoutAppointmentsInput;
};
