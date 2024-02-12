import { Task } from "@prisma/client"
import { Dispatch, HTMLAttributes, SetStateAction } from "react"

export interface ModeToggleProps extends HTMLAttributes<HTMLDivElement> {}
export interface DatePickerProps extends HTMLAttributes<HTMLDivElement> {}

export interface TaskContextProps {

    tasks : Task[] | undefined
    setTasks: Dispatch<SetStateAction<Task[] | undefined>>
}

export interface ButtonProps {

    isChecked: boolean
    task: Task
}