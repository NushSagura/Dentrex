import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  dateIssued?: SortOrder;
  patientId?: SortOrder;
  appointmentId?: SortOrder;
};
