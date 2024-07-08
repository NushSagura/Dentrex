import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type PatientWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  dob?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  invoices?: InvoiceListRelationFilter;
};
