// import { NextResponse } from "next/server"
// import { db } from "@/lib/db"

// export async function POST(req: Request) { 
//     try {
//         const body = await req.json()
//         const { email, username, password } = body

//         // check if email exists 
//         const existingUserByEmail = await db.user.findUnique({
//             where: { email: email }
//         });

//         if(existingUserByEmail) {
//             return NextResponse.json({ user: null,  message: "Email already exists" }, { status: 409 })
//         }

//         // check if username exists 
//         const existingUserByUsername = await db.user.findUnique({
//             where: { username: username }
//         });
//         if(existingUserByUsername) {
//             return NextResponse.json({ user: null,  message: "Username already exists" }, { status: 409 })
//         }

//         const newUser = await db.user.create({
//             data: {
//                 email,
//                 username,
//                 password
//             }
//         })

//         return NextResponse.json({ body })
//     } catch (error) {
        
//     }
// } 