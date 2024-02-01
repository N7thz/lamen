import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Tasks } from "@prisma/client";

export async function GET() {

    return NextResponse.json({ message: "Hello word dos guri" })
}

export async function POST(request: NextRequest) {

    const body: Tasks = await request.json()

    console.log(body)

    await prisma.tasks.create({
        data: body
    })

    return new NextResponse("Created task", {
        status: 201
    })
}

