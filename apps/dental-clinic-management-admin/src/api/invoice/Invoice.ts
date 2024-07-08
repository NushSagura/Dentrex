import { Patient } from "../patient/Patient";
import { Appointment } from "../appointment/Appointment";

export type Invoice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  dateIssued: Date | null;
  patient?: Patient | null;
  appointment?: Appointment | null;
};
