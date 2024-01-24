import { Location } from "./location.model"
import { Status } from "./status.model"

export class Training{
  "title": string;
  "description": string;
  "facilitator": string;
  "location": Location;
  "startDate": Date;
  "endDate": Date;
  "attendees": Array<string>;//employee IDs
  "allowance": number;
  "status": Status;
}
