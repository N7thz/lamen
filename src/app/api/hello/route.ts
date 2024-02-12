import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Task } from "@prisma/client";

export async function GET() {

    const response = await prisma.task.findMany()

    return NextResponse.json({ data: response })
}

export async function POST(request: NextRequest) {

    const body: Task = await request.json()

    await prisma.task.create({
        data: body
    })

    return new NextResponse("Created task", {
        status: 201
    })
}

