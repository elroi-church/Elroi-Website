

import { CoverImage } from "./cover-image.entity";

class AuthorData{
  fullname?: string;
  email?: string;
  username?: string;
}

export class BlogPost {
  _id?: string;

  title?: string;

  slug?: string;

  content?: string[];

  authorId?: string;

  categories?: string[];

  uploadCoverImage?: string;

  coverImage?: CoverImage;

  authorData?: AuthorData;

  // tags?: string;

  status?: string;

  createdAt?: string;

  updatedAt?: string;

  publishedDate?: string | Date;
}
