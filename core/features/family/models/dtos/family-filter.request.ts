import { BaseFilterRequest } from "../../../api/api.type";

export class FamilyFilterRequest extends BaseFilterRequest {
  _id?: string;
  name?: string;
  address?: string;
}