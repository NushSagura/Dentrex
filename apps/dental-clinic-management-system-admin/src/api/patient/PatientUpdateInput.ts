import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  dateOfBirth?: Date | null;
  address?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
};
