import { Education } from "../../commons/enums/education.enum";
import { Gender } from "../../commons/enums/gender.enum";
import { FamilyRole } from "./enums/family-role.enum";

export class FamilyMember {
  public _id?: string;
  public email?: string;
  public phoneNumber?: string;
  public gender?: Gender;
  public name?: string;
  public birthDate?: Date | string | null;
  public birthPlace?: string;
  public education?: Education;
  public familyId?: string;
  public job?: string;
  public isBaptized?: boolean;
  public baptismDate?: Date | string | null;
  public isMarried?: boolean;
  public isDedicatedToJesus?: boolean;
  public familyRole?: FamilyRole;
};



