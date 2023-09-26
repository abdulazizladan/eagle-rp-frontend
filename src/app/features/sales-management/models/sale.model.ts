export class Sale {
  "id": string;
  "description": "string";
  "quantity": number;
  "unitPrice": number;
  "date": Date;
  "paymentMethod": "cash" | "transfer" | "in-app" | "POS"
}
