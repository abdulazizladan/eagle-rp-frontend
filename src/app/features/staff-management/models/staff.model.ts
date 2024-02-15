import { Biodata } from "./biodata.model";
import { Contact } from "./contact.model";
import { Education } from "./education.model";

export class Staff{
  "id": string;
  "firstName": string;
  "middleName": string;
  "lastName": string;
  "contact": Contact;
  "biodata": Biodata;
  "educationHistory": Array<Education>;
}
