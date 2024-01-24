import { Repair } from "./repair.model";

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  type: string;
  chasisNumber: string;
  registrationNumber: string;
  dateOfPurchase: Date;
  value: number;
  repair: Array<Repair>;
  comment: string;
}
