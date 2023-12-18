import { NextResponse } from "next/server";
import { db } from "../../../libs/db";
import { hash } from "bcrypt-ts";
import { signupPostSchema } from "../../../libs/validationSchema"
import { parse } from "valibot";

type signupPostSchemaType = {
    fullname: string;
    username: string;
    email: string;
    password: string;
}

export async function POST(req: Request) {
    try {
        const body: signupPostSchemaType = await req.json();
        const { fullname, username, email, password } = parse(signupPostSchema, body);

        const existingUserByEmail = await db.user.findUnique({
            where: {
                email: email,
                //         OR: [
                //             { email: email }, { username: username }
                //         ]
                //     },
                //     include: {
                //         profile: true
            }
        });

        if (existingUserByEmail) {
            return NextResponse.json({
                user: "email",
                success: false,
                message: 'This Email already exists',
                statusCode: 409,
            })
        }
        const existingUserByUsername = await db.profile.findUnique({
            where: {
                username: username,
            },
        });
        if (existingUserByUsername) {
            return NextResponse.json({
                user: "username",
                success: false,
                message: 'This username already exists',
                statusCode: 409,
            })
        }
        const hashedPssword = await hash(password, 10);

        const newUser = await db.user.create({
            data: {
                email: email,
                profile: {
                    create: {
                        fullname: fullname,
                        username: username,
                        password: hashedPssword,
                    },
                },
            },
            include: {
                profile: true
            }
        })

        const { profile, ...res } = newUser;

        return NextResponse.json({ user: res, message: "user created succesfully" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "something went wrong with user registration" }, { status: 500 });
    }

}