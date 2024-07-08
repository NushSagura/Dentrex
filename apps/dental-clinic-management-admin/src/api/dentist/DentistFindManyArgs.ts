import { DentistWhereInput } from "./DentistWhereInput";
import { DentistOrderByInput } from "./DentistOrderByInput";

export type DentistFindManyArgs = {
  where?: DentistWhereInput;
  orderBy?: Array<DentistOrderByInput>;
  skip?: number;
  take?: number;
};
