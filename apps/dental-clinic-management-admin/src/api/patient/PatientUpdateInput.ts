import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { InvoiceUpdateManyWithoutPatientsInput } from "./InvoiceUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  dob?: Date | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  invoices?: InvoiceUpdateManyWithoutPatientsInput;
};
