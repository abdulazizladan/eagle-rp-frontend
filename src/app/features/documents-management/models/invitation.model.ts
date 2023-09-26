import { Document } from "./document.model";

export class Invitation extends Document{
  "sender": string;
  "recipient": string;
  "location": string;
  "date": Date
}
