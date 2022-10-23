export type FamilyInformation = {
  name: string;
  state_id: number;
  city_id: number;
  address?: string;
  district?: string;
  postalCode?: string;
  hamlet?: string;
  neighbourhood?: string;
  familyPhoneNumber?: string;

  // Family Head
  familyHeadName: string;
  familyHeadEmail: string;
  familyHeadPhoneNumber: string;
  birthDate?: Date | string;
  birthPlace?: string;
  education?: string;
  job?: string;
  isBaptized?: boolean;
  baptismDate?: Date | string;
  isMarried?: boolean;
  isDedicatedToJesus?: boolean;
  gender?: string;
};
