import { SortOrder } from "../../util/SortOrder";

export type TreatmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  cost?: SortOrder;
};
