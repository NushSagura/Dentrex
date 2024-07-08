import { SortOrder } from "../../util/SortOrder";

export type DentistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  specialization?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
};
