import { Patient } from "../patient/Patient";
import { Treatment } from "../treatment/Treatment";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  time: Date | null;
  dentist: string | null;
  patient?: Patient | null;
  treatment?: Treatment | null;
};
