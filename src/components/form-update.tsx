"use client"

import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import axios from "axios"
import { twMerge } from "tailwind-merge"

import { Input } from "@/components/ui/input"
import {
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Task } from "@prisma/client"

type UpdateTaskData = z.infer<typeof updateTaskSchema>

interface FormUpdateProps {

    task: Task
}

const updateTaskSchema = z.object({

    title: z.string().optional(),
    body: z.string().optional(),
    task_date: z.string().optional()
})

export const FormUpdate: FC<FormUpdateProps> = ({ task }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { id } = task

    const createTaskForm = useForm<UpdateTaskData>({
        resolver: zodResolver(updateTaskSchema)
    })

    const { register, handleSubmit, formState: { errors } } = createTaskForm

    const handleUpdateTask = async (data: UpdateTaskData) => {

        console.log(data)

        const { title, body, task_date } = data

        const task = {

            title: title === "" ? null : title,
            body: body === "" ? null : body,
            task_date: task_date === ""? null : task_date,
        }        

        await axios.put(`/api/hello/${id}`, task)
            .then(res => {

                console.log(res)
                setIsOpen(true)

                setTimeout(() => {

                    setIsOpen(false)
                    window.location.reload()
                }, 2500)
            })
            .catch(err => console.log(err))
    }

    return (

        <DialogContent
            className="w-1/2"
        >
            {
                isOpen &&
                <Alert
                    className="border-green-500"
                >
                    <Check
                        className="h-4 w-4 text-green-500"
                    />
                    <AlertTitle>Update!</AlertTitle>
                    <AlertDescription>
                        your task was update successfully!
                    </AlertDescription>
                </Alert>
            }
            <form
                onSubmit={handleSubmit(handleUpdateTask)}
                className="flex flex-col justify-around gap-4 p-2 w-full"
            >
                <DialogHeader>
                    <DialogTitle>Update task</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="title"
                            className="text-left"
                        >
                            Task Title
                        </Label>
                        <Input
                            id="title"
                            className={twMerge(
                                "col-span-3 w-full",
                                errors.title && "border-red-700"
                            )}
                            placeholder={
                                errors.title &&
                                errors.title.message
                            }
                            {...register('title')}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>
                            Task Content
                        </Label>
                        <Textarea
                            className={twMerge(
                                "w-full",
                                errors.body &&
                                "border-red-700"
                            )}
                            placeholder={
                                errors.body
                                    ? errors.body.message
                                    : "Write the tasks."
                            }
                            {...register('body')}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="daypicker"
                            className="text-left"
                        >
                            Task Date
                        </Label>
                        <Input
                            type="date"
                            className={twMerge(
                                "w-full",
                                errors.task_date &&
                                "border-red-700"
                            )}
                            {...register("task_date")}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Update Task</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}
