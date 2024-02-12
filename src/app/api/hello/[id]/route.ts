import { prisma } from "@/lib/prisma"
import { Task } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(request: NextRequest, context: any) {

    let taskBody: Task = await request.json()

    const id = context.params.id

    const response = await prisma.task.update({

        where: {
            id
        },
        data: taskBody
    })

    return NextResponse.json({ response })
}

export async function DELETE(request: NextRequest, context: any) {

    const id = context.params.id

    await prisma.task.delete({
        where: {
            id
        }
    })

    return new NextResponse("Delete task", {
        status: 204
    })
}