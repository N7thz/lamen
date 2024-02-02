"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import axios from "axios"
import { twMerge } from "tailwind-merge"

import {
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { Input } from "./ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Check } from "lucide-react"
import { Alert, AlertTitle, AlertDescription } from "./ui/alert"

type CreateTaskData = z.infer<typeof createTaskSchema>

const createTaskSchema = z.object({

    title: z.string().nonempty({
        message: "the title is obrigatory"
    }),
    body: z.string().nonempty({
        message: "the content is obrigatory"
    }),
    task_date: z.string().nonempty({
        message: "the date is obrigatory"
    })
})

export const Form = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const createTaskForm = useForm<CreateTaskData>({
        resolver: zodResolver(createTaskSchema)
    })

    const { register, handleSubmit, formState: { errors } } = createTaskForm

    const handleCreteTask = async (data: CreateTaskData) => {

        const { body, task_date, title } = data

        const task = {

            title,
            body,
            task_date
        }

        await axios.post("/api/hello", task)
            .then(res => {

                console.log(res)
                setIsOpen(true)

                setTimeout(() => {

                    setIsOpen(false)
                    window.location.reload()
                }, 3000)

            })
            .catch(err => console.log(err))
    }

    return (

        <>
            {
                isOpen &&
                <Alert
                    className="border-green-500"
                >
                    <Check
                        className="h-4 w-4 text-green-500"
                    />
                    <AlertTitle>Created!</AlertTitle>
                    <AlertDescription>
                        your task was created successfully!
                    </AlertDescription>
                </Alert>
            }
            <form
                onSubmit={handleSubmit(handleCreteTask)}
                className="flex flex-col justify-around gap-4 p-2 w-full"
            >
                <DialogHeader>
                    <DialogTitle>Add task</DialogTitle>
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
                    <Button type="submit">Save Task</Button>
                </DialogFooter>
            </form>
        </>
    )
}
