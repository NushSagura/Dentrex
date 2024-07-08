import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "dentist";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.dentist?.toString() || String(record.id);
};
