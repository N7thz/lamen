"use client"

import { useTask } from "@/context/task-context"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { ScrollArea } from "./ui/scroll-area"

export const TasksForToday = () => {

    const { tasks } = useTask()
    const tasksForToday = tasks?.filter(
        task => format(task.task_date, "PPP") === format(new Date, "PPP"))        
    
    return (

        <ScrollArea
            className="max-h-[150px]"
        >
            {
                tasksForToday?.length == 0
                    ? "You have no tasks for today"
                    : tasksForToday?.map(task =>
                        <Card
                            key={task.id}
                            className="p-2 border-violet-500"
                        >
                            <CardTitle
                                className="w-full p-2 italic"
                            >
                                {task.title}
                            </CardTitle>

                            <CardDescription
                                className="pl-4"
                            >
                                {task.body}
                            </CardDescription>
                        </Card>
                    )
            }
        </ScrollArea>
    )
}
