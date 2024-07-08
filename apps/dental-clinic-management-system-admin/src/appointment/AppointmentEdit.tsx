import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { TreatmentTitle } from "../treatment/TreatmentTitle";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <DateTimeInput label="Time" source="time" />
        <TextInput label="Dentist" source="dentist" />
        <ReferenceInput source="patient.id" reference="Patient" label="Patient">
          <SelectInput optionText={PatientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="treatment.id"
          reference="Treatment"
          label="Treatment"
        >
          <SelectInput optionText={TreatmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
