import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type PatientWhereInput = {
  id?: StringFilter;
  dateOfBirth?: DateTimeNullableFilter;
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
};
