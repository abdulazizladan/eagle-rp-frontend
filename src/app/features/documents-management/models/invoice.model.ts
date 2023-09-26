export class Invoice extends Document{
  "sender": string;
  "recipient": string;
  "services": {
    "description": string;
    "unitPrice": number;
    "quantity": number;
  }[];
  "products": {
    "description": string;
    "unitPrice": number;
    "quantity": number;
  }[];
  "isPaid": boolean;
}
