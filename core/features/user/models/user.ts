import { Gender } from "../../commons/enums/gender.enum";
import { FamilyRole } from "../../family/models/enums/family-role.enum";

export class User {
  /**
   * User ID
   */
  readonly _id?: string;

  /**
   * User name.
   */
  public name?: string;

  /**
   * Username
   */

  public username?: string;

  /**
   * User Email.
   */

  public email?: string;

  /**
   * User Avatar.
   */
  public avatarId?: string;

  /**
   * User Profile Image.
   */

  public image?: string;

  /**
   * User Full Name.
   */

  public fullname?: string;

  /**
   * User Password.
   */

  public password?: string;

  /**
   * User Phone Number.
   */

  public phone?: string;

  /**
   * User Role in Family.
   */
  public familyRole?: FamilyRole;

  /**
   * User registered by.
   */
  public registeredBy?: string;

  /**
   * User Nickname
   */
  public nickname?: string;

  /**
   * User First Name.
   */

  public firstname?: string;

  /**
   * User Middle Name.
   */

  public middlename?: string;

  /**
   * User Last Name.
   */

  public lastname?: string;

  /**
   * User Gender.
   */

  public gender?: Gender;

  /**
   * User Birth Date.
   */

  public birthDate?: Date | string | null;


  /**
   * User Birth Place.
   */

  public birthPlace?: string;

  /**
   * Nomer Induk Kependudukan.
   */

  public nik?: string;

  /**
   * User Total Point.
   */

  public totalPoint?: number;

  /**
   * User Roles.
   */
  // @IsEnum(Role)

  // public role?: Role;

  /**
   * User Address.
   */

  public address?: string;

  /**
   * User Father Name.
   */

  public fatherName?: string;

  /**
   * User Mother Name.
   */

  public motherName?: string;

  /**
   * User Postal Code.
   */

  public postcode?: string;

  /**
   * Is User Profile Complete.
   */

  public isProfileComplete?: boolean;

  /**
   * Is User joined Cool Program.
   */

  public isJoinedCool?: boolean;

  /**
   * Is User joined KOM Program.
   */

  public isJoinedKOM100?: boolean;

  /**
   * Is User joined as volunteer.
   */

  public interestedJoinVolunteer?: boolean;

  public baptismDate?: Date | string | null;

  /**
   * Is email verified.
   */
  public emailVerified?: boolean;
}
