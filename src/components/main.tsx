import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { CalendarComponent } from "@/components/calendar-components"
import { CardBlock } from "./card"
import { TasksForToday } from "./tasks-for-today"

export const Main = () => {

    return (

        <div className="w-full min-h-full flex">
            <Card
                className="w-1/3 min-h-[760px] bg-zinc-100 dark:bg-zinc-950 
                flex flex-col gap-4 justify-around items-center
                my-8 mx-4 rounded-lg border-violet-500"
            >
                <CardContent
                    className="border-none"
                >
                    <CardHeader>
                        <CardTitle>
                            Tasks for Tomorrow:
                        </CardTitle>
                    </CardHeader>
                    <TasksForToday />
                </CardContent>
                <CalendarComponent />
            </Card>
            <CardBlock />
        </div >
    )
}
