export class LoginResponse {
  public accessToken!: string;
  public user:
    | {
        id: string;
        name: string;
        email: string;
        image: string;
      }
    | undefined;
}
