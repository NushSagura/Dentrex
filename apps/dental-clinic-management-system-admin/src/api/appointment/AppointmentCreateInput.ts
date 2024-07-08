import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { TreatmentWhereUniqueInput } from "../treatment/TreatmentWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  time?: Date | null;
  dentist?: string | null;
  patient?: PatientWhereUniqueInput | null;
  treatment?: TreatmentWhereUniqueInput | null;
};
