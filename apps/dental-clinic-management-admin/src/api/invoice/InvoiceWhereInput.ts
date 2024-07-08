import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type InvoiceWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  dateIssued?: DateTimeNullableFilter;
  patient?: PatientWhereUniqueInput;
  appointment?: AppointmentWhereUniqueInput;
};
