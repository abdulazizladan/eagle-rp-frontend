import { Biodata } from "./biodata.model";
import { Employment } from "./employment.model";

export class Staff{
  "id": string;
  "firstName": string;
  "middleName": string;
  "lastName": string;
  "employment": Employment;
  "biodata": Biodata;
}
