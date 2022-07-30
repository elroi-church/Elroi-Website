import { BaseFilterRequest } from "../../../api/api.type";

export class CityFilterRequest extends BaseFilterRequest{
  state_id?: number;
}