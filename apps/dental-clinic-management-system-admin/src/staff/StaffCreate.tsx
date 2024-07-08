import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StaffCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Role" source="role" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
