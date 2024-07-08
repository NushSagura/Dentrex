import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  dateIssued?: Date | null;
  patient?: PatientWhereUniqueInput | null;
  appointment?: AppointmentWhereUniqueInput | null;
};
