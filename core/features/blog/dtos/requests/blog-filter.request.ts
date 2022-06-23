export class BlogPostFilterRequest {
  page?: number;

  limit?: number;

  title?: string;

  content?: string;

  author?: string;

  category?: string;

  tags?: string;

  status?: string;

  createdAt?: string;

  updatedAt?: string;
}
