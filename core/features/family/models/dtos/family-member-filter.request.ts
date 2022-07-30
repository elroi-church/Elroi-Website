import { BaseFilterRequest } from "../../../api/api.type";

export class FamilyMemberFilterRequest extends BaseFilterRequest {
  _id?: string;
  name?: string;
  familyId?: string;
}