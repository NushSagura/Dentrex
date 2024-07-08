import { AppointmentCreateNestedManyWithoutTreatmentsInput } from "./AppointmentCreateNestedManyWithoutTreatmentsInput";

export type TreatmentCreateInput = {
  name?: string | null;
  description?: string | null;
  cost?: number | null;
  appointments?: AppointmentCreateNestedManyWithoutTreatmentsInput;
};
