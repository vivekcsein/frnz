import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db"
import { compare } from "bcrypt-ts";
import { AuthenticationError } from "./AuthencationError";
// import GoogleProvider from "next-auth/providers/google";
// import ldap from "ldapjs";
// const ldap = require("ldapjs");

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/signin",
        // signOut: "/signout",
        // error: "/error"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<any> {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                let existingUser = await db.user.findUnique({
                    where: { email: credentials.email },
                    include: {
                        profile: true
                    }
                })

                if (!existingUser) {
                    throw new AuthenticationError('Email is not registered');
                }

                if (existingUser?.profile) {
                    const passwordMatch = await compare(credentials.password, existingUser.profile.password as string);
                    if (!passwordMatch) {
                        throw new AuthenticationError('Incorrect Password');
                    } else {
                        console.log(`Welcome to the Frenzz.in`);
                    }
                } else {
                    throw new AuthenticationError("Profile does not exist for this user");
                }

                return {
                    id: `${existingUser.profile?.id}`,
                    email: existingUser.email,
                    username: existingUser.profile?.username,
                    // role: existingUser.profile
                }
            }
        }),

        // CredentialsProvider({
        //     name: "LDAP",
        //     credentials: {
        //         username: { label: "DN", type: "text", placeholder: "" },
        //         password: { label: "Password", type: "password" },
        //     },
        //     async authorize(credentials, req) {
        //         // You might want to pull this call out so we're not making a new LDAP client on every login attemp
        //         const client = ldap.createClient({
        //             url: process.env.LDAP_URI,
        //         })

        //         // Essentially promisify the LDAPJS client.bind function
        //         return new Promise((resolve, reject) => {
        //             client.bind(credentials?.username, credentials?.password, (error: any) => {
        //                 if (error) {
        //                     console.error("Failed")
        //                     reject()
        //                 } else {
        //                     console.log("Logged in")
        //                     resolve({
        //                         username: credentials?.username,
        //                         password: credentials?.password,
        //                     })
        //                 }
        //             })
        //         })
        //     },
        // }),

    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    // accessTokenExpiresIn: 60 * 60 * 24 * 7,
                    // refreshTokenExpiresIn: 60 * 60 * 24 * 30,
                    // expiresIn: "1d",
                    sub: user.id,
                    // username: user.username,
                    // role: user.role,
                }
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    // username: token.username,
                    // role: token.role
                }
            }
        },
    }
}