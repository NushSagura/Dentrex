import { Appointment } from "../appointment/Appointment";

export type Dentist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  specialization: string | null;
  email: string | null;
  phoneNumber: string | null;
  appointments?: Array<Appointment>;
};
