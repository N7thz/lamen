import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { DialogBlock } from "./dialog"
import { AllTaksContent } from "./all-taks-content"

export const CardBlock = () => {

    return (

        <Card
            className="border-violet-500 m-4 w-2/3 min-h-[760px] flex flex-col
            items-center bg-zinc-100 dark:bg-zinc-950 my-8 mx-4 rounded-lg"
        >
            <CardHeader>
                <CardTitle>
                    All tasks:
                </CardTitle>
            </CardHeader>

            <CardContent
                className="w-11/12 h-5/6 m-2 rounded-lg border bg-card 
                text-card-foreground shadow-sm flex flex-col justify-center items-center relative"
            >
                <AllTaksContent />
            </CardContent>

            <CardFooter>
                <DialogBlock />
            </CardFooter>
        </Card>
    )
}
