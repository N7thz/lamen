"use client"

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from "@/components/ui/select"
import {
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { DatePicker } from "./day-picker"
import { Input } from "./ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type CreateTaskData = z.infer<typeof createTaskSchema>

const createTaskSchema = z.object({

    title: z.string(),
    body: z.string(),
    task_date: z.date(),
    emergency: z.string(),
})

export const Form = () => {

    const createTaskForm = useForm<CreateTaskData>({
        resolver: zodResolver(createTaskSchema)
    })

    const { register, handleSubmit, formState } = createTaskForm

    console.log(formState.errors)

    const handleCreteTask = async (data: CreateTaskData) => {

        console.log(data)

        // const task = {

        //     title: "lavar a louça",
        //     taksBody: "lavar a louça um dia desses ai",
        //     emergency: "muito importante",
        // }

        // await axios.post("/api/hello", task)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
    }

    return (

        <FormProvider
            {...createTaskForm}
        >
            <form
                onSubmit={handleSubmit(handleCreteTask)}
                className="flex flex-col justify-around gap-4 p-2"
            >
                <DialogHeader>
                    <DialogTitle>Add task</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">

                    <div className="flex flex-col gap-2">

                        <Label
                            htmlFor="name"
                            className="text-left"
                        >
                            Task Title
                        </Label>
                        <Input
                            id="name"
                            className="col-span-3 w-1/2"
                            {...register('title')}
                        />
                    </div>

                    <div>
                        <Label>
                            <Textarea
                                placeholder="Write the tasks."
                                {...register('body')}
                            />
                        </Label>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="daypicker"
                            className="text-left"
                        >
                            Task Date
                        </Label>
                        <DatePicker />
                    </div>

                    <div
                        className="flex flex-col gap-2"
                    >
                        <Label>
                            Choose an Emergency
                        </Label>

                        <Select>
                            <SelectTrigger
                                className="w-[280px]" >
                                <SelectValue
                                    placeholder="Emergency"
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem
                                    value="Low"
                                    className="w-ful"
                                >
                                    <div className="flex w-[70px] justify-between items-center gap-2">
                                        Low
                                        <div
                                            className="w-3 h-3 bg-green-600 rounded-full"
                                        />
                                    </div>
                                </SelectItem>

                                <SelectItem value="Mid">
                                    <div className="flex w-[70px] justify-between items-center gap-2">
                                        Mid
                                        <div
                                            className="w-3 h-3 bg-yellow-600 rounded-full"
                                        />
                                    </div>
                                </SelectItem>

                                <SelectItem value="High">
                                    <div className="flex w-[70px] justify-between items-center gap-2">
                                        High
                                        <div
                                            className="w-3 h-3 bg-red-600 rounded-full"
                                        />
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save Task</Button>
                </DialogFooter>
            </form>
        </FormProvider>
    )
}
