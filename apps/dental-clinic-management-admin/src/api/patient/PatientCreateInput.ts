import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { InvoiceCreateNestedManyWithoutPatientsInput } from "./InvoiceCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  dob?: Date | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  invoices?: InvoiceCreateNestedManyWithoutPatientsInput;
};
