import { ComponentProps, FC, useState } from "react"
import { Task } from "@prisma/client"
import { tv } from "tailwind-variants"
import { Checkbox } from "./ui/checkbox"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { ButtonEdit } from "./button-edit"
import { ButtonTrash } from "./button-trash"
interface TaskCardProps extends ComponentProps<"div"> {

    task: Task
}

const taskVariant = tv({

    base: "w-2/3 duration-150 hover:scale-95 cursor-pointer",
    variants: {

        mode: {

            default: "border-violet-500",
            checked: "bg-violet-500 border-zinc-50"
        }
    },
    defaultVariants: {

        mode: "default"
    }
})



const titleVariant = tv({

    base: "text-left",
    variants: {

        mode: {

            default: "",
            checked: "italic line-through"
        }
    }
})

export const TaskCard: FC<TaskCardProps> = ({ task }) => {

    const { title } = task

    const [isChecked, setIsChecked] = useState<boolean>(false)

    const changeChecked = () => {

        setIsChecked(!isChecked)
    }

    return (

        < Card
            className={

                isChecked
                    ? taskVariant({
                        mode: "checked"
                    })
                    : taskVariant({

                        mode: "default"
                    })
            }
        >
            <CardHeader>
                <CardTitle
                    className={

                        isChecked
                            ? titleVariant({
                                mode: "checked"
                            })
                            : titleVariant({

                                mode: "default"
                            })
                    }
                >
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent
                className="flex flex-col items-end"
            >
                <div
                    className="w-1/3 h-full flex justify-around items-center"
                >
                    <Checkbox
                        onClick={changeChecked}
                        className="w-7 h-7 p-1"
                    />

                    <ButtonEdit
                        task={task}
                        isChecked={isChecked}
                    />

                    <ButtonTrash
                        task={task}
                        isChecked={isChecked}
                    />

                </div>
            </CardContent>
        </Card>
    )
}
