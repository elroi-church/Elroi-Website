import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../core/lib/mongodb";
import axios from "axios";
import { LoginResponse } from "../../../core/features/auth/types";
import { NextApiRequest } from "next";
import { firebaseAuth } from "../../../core/lib/firebase";
import {
  getAdditionalUserInfo,
  getIdToken,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { BaseResponse } from "../../../core/features/api/api.type";

interface LoginRequest {
  username: string;
  password: string;
}

export default NextAuth({
  // Configure one or more authentication providers
  // adapter: MongoDBAdapter(clientPromise),
  // pages: {
  //   signIn: "/auth/signin",
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "email or username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied

        const url = `${process.env.API_URL}/api/auth/login`;

        const result = await axios
          .post<BaseResponse<LoginResponse>>(
            url,
            {
              username: credentials?.username,
              password: credentials?.password,
            },
            {
              headers: {
                accept: "*/*",
                "Content-Type": "application/json",
              },
            }
          )

        if (result) {
          const { accessToken, user } = result.data.data;

          const response = {
            accessToken: accessToken,
            ...user,
          };
          // Any object returned will be saved in `user` property of the JWT
          return response;
        } else {
          // If you return null or false then the credentials will be rejected
          throw new Error("Invalid credentials");
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error("error message") // Redirect to error page
          // throw "/path/to/redirect"        // Redirect to a URL
        }
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET as string,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.log("account", account);
        if (account.provider == "google") {
          const credential = GoogleAuthProvider.credential(
            account.id_token,
            account.access_token
          );
          // sign in firebase with credential
          const result = await signInWithCredential(firebaseAuth, credential);

          // get id token from firebase auth result
          const getFirebaseToken = await getIdToken(result.user);

          // get additional user info from firebase auth
          const additionalUserInfo = getAdditionalUserInfo(result);

          // check if user is new or not and update user info
          if (additionalUserInfo?.isNewUser) {
            // TODO : Call  Update User Info

            const registerUser = await axios.post<LoginResponse>(
              `${process.env.API_URL}/api/google-auth/register`,
              {
                idToken: getFirebaseToken,
                email: user.email,
              }
            );

            user.accessToken = registerUser.data.accessToken;

            console.log("registerUser", registerUser);
          } else {
            const loginUser = await axios.post<LoginResponse>(
              `${process.env.API_URL}/api/google-auth/login`,
              {
                idToken: getFirebaseToken,
                email: user.email,
              }
            );

            user.accessToken = loginUser.data.accessToken;

            console.log("loginUser", loginUser);
          }

          console.log(getFirebaseToken);
          // extract these two tokens
          // const { accessToken, idToken } = account;
        }else if(account.provider == "credentials"){
          
        }
        console.log("user", user);
        return true;
      } catch (error) {
        console.log("error", error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken ?? "";

      console.log("session", session);
      // session.user?.name
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
        token.sub = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
  },
  events: {
    createUser: async ({ user }) => {
      console.log("createUserEvent", user);
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
});
