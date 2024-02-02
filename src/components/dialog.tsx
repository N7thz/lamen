import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Form } from "./form"

export const DialogBlock = () => {

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Task</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <Form />
            </DialogContent>
        </Dialog>
    )
}
