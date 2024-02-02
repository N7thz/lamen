"use client"

import { useEffect, useState } from "react"
import { Task } from "@prisma/client"
import axios from "axios"
import { ScrollArea } from "./ui/scroll-area"
import { TaskCard } from "./task-card"

export const AllTaksContent = () => {

    const [tasks, setTasks] = useState<Task[]>()

    useEffect(() => {

        axios.get("/api/hello")
            .then(res => {

                setTasks(res.data.data)
            })
            .catch(err => console.log(err.data))
    }, [])

    if (tasks) {

        return (

            <ScrollArea
                className="h-full w-full rounded-lg p-4 mt-20 text-center"
            >
                <div className="w-full flex flex-col gap-4 justify-center items-center">

                    {
                        tasks.length === 0
                            ? " you dont have any task"
                            : tasks.map(task =>
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                />
                            )
                    }
                </div>

            </ScrollArea >
        )
    }

}
