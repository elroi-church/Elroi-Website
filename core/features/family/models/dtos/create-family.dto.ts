import { Family } from "../family";

export class CreateFamilyDto extends Family {
  // Family Head
  familyHeadName?: string;
  familyHeadEmail?: string;
  familyHeadPhoneNumber?: string;
  birthDate?: Date | string;
  birthPlace?: string;
  education?: string;
  job?: string;
  isBaptized?: boolean;
  baptismDate?: Date | string;
  isMarried?: boolean;
  isDedicatedToJesus?: boolean;
  gender?: string;
}
