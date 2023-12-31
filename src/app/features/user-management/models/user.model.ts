import { UserStatus } from "../enums/userStatus.enum";

export class User{
  "id": string;
  "email": string;
  "firstName": string;
  "middleName": string;
  "lastName": string;
  "gender": string;
  "password": string;
  "status": UserStatus
}
