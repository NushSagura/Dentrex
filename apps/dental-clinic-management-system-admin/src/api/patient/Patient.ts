import { Appointment } from "../appointment/Appointment";

export type Patient = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateOfBirth: Date | null;
  address: string | null;
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  appointments?: Array<Appointment>;
};
