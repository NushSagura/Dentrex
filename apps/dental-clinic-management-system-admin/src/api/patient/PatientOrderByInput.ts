import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateOfBirth?: SortOrder;
  address?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
};
