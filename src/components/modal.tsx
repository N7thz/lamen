import { FC } from "react"
import { Button } from "@/components/ui/button"
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface ModalProps {

    title: string
    description: string
    functionButton: () => void
}

export const Modal: FC<ModalProps> = ({ 
    title, description, functionButton }) => {

    return (

        <DialogContent className="w-1/3 h-1/3 flex flex-col justify-around">

            <DialogHeader className="flex flex-col gap-3">

                <DialogTitle className="text-3xl">
                    {title}
                </DialogTitle>

                <DialogDescription className="text-xl">
                    {description}
                </DialogDescription>
            </DialogHeader>

            <DialogFooter>
                <Button
                    onClick={functionButton}
                >
                    confirm
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}
