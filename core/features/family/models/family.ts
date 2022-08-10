import { City } from "../../area/models/city.model";

export class Family{
  readonly _id?: string;
  name?: string;
  code?: string;
  churchArea?: string;
  churchName?: string;
  address?: string;
  city_id?: number;
  city?: City;
  state_id?: number;
  state?: City;
  postalCode?: string;
  district?: string;
  hamlet?: string;
  familyPhoneNumber?: string;
  neighbourhood?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  expiredAt?: Date | string;
}