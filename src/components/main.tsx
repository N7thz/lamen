import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { CalendarComponent } from "@/components/calendar-components"
import { CardBlock } from "./card"

export const Main = () => {

    return (

        <div className="w-full min-h-full flex">
            <Card
                className="w-1/3 min-h-[760px] bg-zinc-100 dark:bg-zinc-950 
                flex flex-col gap-4 justify-around items-center
                my-8 mx-4 rounded-lg border-violet-500"
            >
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Taks for Today:
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        You have no tasks for today
                    </CardContent>
                </Card>
                <CalendarComponent />
            </Card>
            <CardBlock />
        </div >
    )
}
