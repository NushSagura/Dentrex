import { AppointmentUpdateManyWithoutDentistsInput } from "./AppointmentUpdateManyWithoutDentistsInput";

export type DentistUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentUpdateManyWithoutDentistsInput;
};
