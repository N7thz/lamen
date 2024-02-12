"use client"

import { TaskContextProps } from "@/types"
import { Task } from "@prisma/client"
import axios from "axios"
import {

    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"

const TaskContext = createContext({} as TaskContextProps)

export function TaskProvider({ children }: { children: ReactNode }) {

    const [tasks, setTasks] = useState<Task[] | undefined>()

    useEffect(() => {

        axios.get("/api/hello")
            .then(res => {

                setTasks(res.data.data)
            })
            .catch(err => console.log(err.data))
    }, [])

    const value:TaskContextProps = {

        tasks, setTasks
    }

    return (

        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => useContext(TaskContext)