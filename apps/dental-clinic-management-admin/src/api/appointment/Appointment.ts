import { Patient } from "../patient/Patient";
import { Dentist } from "../dentist/Dentist";
import { Invoice } from "../invoice/Invoice";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  time: string | null;
  patient?: Patient | null;
  dentist?: Dentist | null;
  invoices?: Array<Invoice>;
};
