import { Dentist as TDentist } from "../api/dentist/Dentist";

export const DENTIST_TITLE_FIELD = "firstName";

export const DentistTitle = (record: TDentist): string => {
  return record.firstName?.toString() || String(record.id);
};
