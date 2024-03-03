import { Biodata } from "./biodata.model";
import { Contact } from "./contact.model";
import { Education } from "./education.model";
import { Emplyment } from "./employment.model";

export class Staff{
  "basicInfo": {
    "id": string;
    "firstName": string;
    "middleName": string;
    "lastName": string;
  };
  "biodata": Biodata;
  "contactInfo": Contact;
  "employmentHistory": Array<Emplyment>;
  "educationHistory": Array<Education>;
}
