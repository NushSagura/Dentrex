import { Appointment } from "../appointment/Appointment";
import { Invoice } from "../invoice/Invoice";

export type Patient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  dob: Date | null;
  email: string | null;
  phoneNumber: string | null;
  appointments?: Array<Appointment>;
  invoices?: Array<Invoice>;
};
