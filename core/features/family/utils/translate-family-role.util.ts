import { FamilyRole } from "../models/enums/family-role.enum";

export function TranslateFamilyRole(value?: FamilyRole){
  switch(value){
    case FamilyRole.Head:
      return "Kepala Keluarga";
    case FamilyRole.Spouse:
      return "Pasangan";
    case FamilyRole.Child:
      return "Anak";
    case FamilyRole.Others:
      return "Orang Lain";
    case FamilyRole.Relatives:
      return "Kerabat";
    default:
      return "";
  }
}