import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";
import { TREATMENT_TITLE_FIELD } from "../treatment/TreatmentTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Date" source="date" />
        <TextField label="Time" source="time" />
        <TextField label="Dentist" source="dentist" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Treatment"
          source="treatment.id"
          reference="Treatment"
        >
          <TextField source={TREATMENT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
