export class Site {
  "id": string;
  "name": string;
  "location": {
    "streetAddress": string;
    "lga": string;
    "state": string;
    "country": string;
    "coordinates": {
      "longitude": number;
      "latitude": number
    }
  }
}
