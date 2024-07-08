import { AppointmentUpdateManyWithoutTreatmentsInput } from "./AppointmentUpdateManyWithoutTreatmentsInput";

export type TreatmentUpdateInput = {
  name?: string | null;
  description?: string | null;
  cost?: number | null;
  appointments?: AppointmentUpdateManyWithoutTreatmentsInput;
};
