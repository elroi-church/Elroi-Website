import { Education } from "../enums/education.enum";


export function TranslateEducation(value?: Education){
  switch(value){
    case Education.Elementary:
      return "SD";
    case Education.JuniorHigh:
      return "SMP";
    case Education.SeniorHigh:
      return "SMA";
    case Education.Undergraduate:
      return "S1";
    case Education.Graduate:
      return "S2";
    case Education.Postgraduate:
      return "S3";
    case Education.Others:
      return "Lainnya";
    default:
      return "";
  }
}