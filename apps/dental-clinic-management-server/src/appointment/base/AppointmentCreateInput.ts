/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { DentistWhereUniqueInput } from "../../dentist/base/DentistWhereUniqueInput";
import { InvoiceCreateNestedManyWithoutAppointmentsInput } from "./InvoiceCreateNestedManyWithoutAppointmentsInput";

@InputType()
class AppointmentCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  time?: string | null;

  @ApiProperty({
    required: false,
    type: () => PatientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientWhereUniqueInput)
  @IsOptional()
  @Field(() => PatientWhereUniqueInput, {
    nullable: true,
  })
  patient?: PatientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DentistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DentistWhereUniqueInput)
  @IsOptional()
  @Field(() => DentistWhereUniqueInput, {
    nullable: true,
  })
  dentist?: DentistWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceCreateNestedManyWithoutAppointmentsInput,
  })
  @ValidateNested()
  @Type(() => InvoiceCreateNestedManyWithoutAppointmentsInput)
  @IsOptional()
  @Field(() => InvoiceCreateNestedManyWithoutAppointmentsInput, {
    nullable: true,
  })
  invoices?: InvoiceCreateNestedManyWithoutAppointmentsInput;
}

export { AppointmentCreateInput as AppointmentCreateInput };
