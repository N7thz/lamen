import { FC } from 'react'

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Trash } from 'lucide-react'
import { tv } from 'tailwind-variants'
import { ButtonProps } from '@/types'
import { Modal } from './modal'
import axios from 'axios'

const button = tv({

    base: "cursor-pointer duration-300 p-1 rounded-sm hover:scale-105",
    variants: {

        mode: {

            default: "bg-violet-500 hover:bg-violet-700/80",
            checked: "bg-zinc-50 text-violet-500 hover:bg-zinc-100/80"
        }
    }
})

export const ButtonTrash: FC<ButtonProps> = ({ isChecked, task }) => {

    const id = task.id

    const handleDeleteTask = async () => {

        await axios.delete(`/api/hello/${id}`)
            .finally(() => window.location.reload())
    }

    return (

        <Dialog>
            <DialogTrigger asChild>

                <Trash
                    width={28}
                    height={28}
                    className={

                        isChecked
                            ? button({

                                mode: "checked"
                            })
                            : button({

                                mode: "default"
                            })
                    }
                />
            </DialogTrigger>
            <Modal
                title='Delete'
                description='Are you sure you want to delete the task?'
                functionButton={handleDeleteTask}
            />
        </Dialog>
    )
}
