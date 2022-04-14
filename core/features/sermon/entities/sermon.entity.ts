import { SermonPublishStatus } from "../enums/sermon-publish-status.enum";
import { SermonStatus } from "../enums/sermon-status.enum";

export class Sermon {
  /**
   * Sermon Title.
   */

  title?: string;

  /**
   * Sermon Slug.
   */

  slug?: string;

  /**
   * Sermon Description.
   */
  description?: string;

  /**
   * Sermon Date.
   */
  sermonDate?: Date;

  /**
   * Sermon Content.
   */

  content?: string;

  /**
   * Sermon Content Json.
   */

  contentJson?: Record<string, any>[];

  /**
   * Youtube Video ID.
   */

  youtubeId?: string;

  /**
   * Sermon Youtube Url.
   */

  youtubeURL?: string;

  /**
   * Sermon Thumbnail Url.
   */

  thumbnailURL?: string;

  /**
   * Sermon Preacher.
   */
  preacher?: string;

  /**
   * Sermon Have Offline Content.
   */
  haveOffline?: boolean;

  /**
   * Sermon Status.
   */

  status?: SermonStatus;

  /**
   * Sermon Publish Status.
   */
  publishStatus?: SermonPublishStatus;

  /**
   * Sermon Time List.
   */

  // timeList?: TimeList[];

  /**
   * Sermon Created At.
   */

  readonly createdAt?: Date;

  /**
   * Sermon Created By.
   */

  // createdBy?: User;

  /**
   * Sermon Updated At.
   */

  readonly updatedAt?: Date;

  /**
   * Sermon Updated By.
   */

  // updatedBy?: User;

  /**
   * Preacher Data refrence to User.
   */

  // preacherData?: string | User;
}
