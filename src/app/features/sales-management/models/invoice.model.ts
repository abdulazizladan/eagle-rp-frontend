import { ItemType } from "./invoiceItem.model";
import { RecpiientType } from "./recipient.type";

export type InvoiceType = {
  id: string;
  dateGenerated: Date;
  recipent: RecpiientType;
  items: Array<ItemType>;
}
