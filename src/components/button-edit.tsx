import { FC } from 'react'

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Edit } from 'lucide-react'
import { tv } from 'tailwind-variants'
import { ButtonProps } from '@/types'
import { FormUpdate } from './form-update'

const button = tv({

    base: "cursor-pointer duration-300 p-1 rounded-sm hover:scale-105",
    variants: {

        mode: {

            default: "bg-violet-500 hover:bg-violet-700/80",
            checked: "bg-zinc-50 text-violet-500 hover:bg-zinc-100/80"
        }
    }
})

export const ButtonEdit: FC<ButtonProps> = ({ isChecked, task }) => {

    return (

        <Dialog>
            <DialogTrigger asChild>

                <Edit
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
            
            <FormUpdate task={task} />
        </Dialog>
    )
}
