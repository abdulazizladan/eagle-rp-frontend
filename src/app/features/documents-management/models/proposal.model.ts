import { Document } from "./document.model";

export class Proposal extends Document{
  "sender": string;
  "recipient": string;
  "keywords": string[];
}
