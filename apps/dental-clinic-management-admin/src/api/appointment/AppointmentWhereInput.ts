import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { DentistWhereUniqueInput } from "../dentist/DentistWhereUniqueInput";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type AppointmentWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  time?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  dentist?: DentistWhereUniqueInput;
  invoices?: InvoiceListRelationFilter;
};
