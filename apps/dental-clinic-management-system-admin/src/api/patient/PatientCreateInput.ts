import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  dateOfBirth?: Date | null;
  address?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
};
