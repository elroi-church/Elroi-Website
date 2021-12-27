export class BaseResponse<T> {
  constructor(status: number, message: string, data: T) {
    this.data = data;
    this.status = status;
    this.message = message;
  }

  public data: T | undefined;
  public status: number;
  public message: string;
}
