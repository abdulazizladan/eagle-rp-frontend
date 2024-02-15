import { Building } from "./building/building.model";

export class Site {
  "id": string;
  "name": string;
  "code": string;
  "buildings": Array<Building>
}
