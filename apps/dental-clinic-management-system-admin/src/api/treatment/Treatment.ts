import { Appointment } from "../appointment/Appointment";

export type Treatment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  cost: number | null;
  appointments?: Array<Appointment>;
};
