import { AppointmentCreateNestedManyWithoutDentistsInput } from "./AppointmentCreateNestedManyWithoutDentistsInput";

export type DentistCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  specialization?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutDentistsInput;
};
