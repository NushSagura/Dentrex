import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  dob?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
};
