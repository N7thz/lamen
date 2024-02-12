"use client"

import { ScrollArea } from "./ui/scroll-area"
import { TaskCard } from "./task-card"
import { useTask } from "@/context/task-context"

export const AllTaksContent = () => {

    const { tasks } = useTask()

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

                                <div
                                    key={task.id}
                                    className="w-full flex justify-center items-center"
                                >
                                    <TaskCard task={task} />
                                </div>
                            )
                    }
                </div>

            </ScrollArea >
        )
    }

}
