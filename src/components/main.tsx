import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CalendarComponent } from "@/components/calendar-components"
import { DatePicker } from "./day-picker"
import { Search } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"

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
                    text-card-foreground shadow-sm
                    flex flex-col justify-center items-center relative"
                >
                    <div
                        className="absolute top-4 m-auto w-2/3"
                    >
                        <Input
                            className="relative"
                            placeholder="Search a task"
                        />
                        <Search
                            className="absolute top-[26%] right-1 
                            text-zinc-50/40 cursor-pointer hover:text-zinc-50"
                            width={20}
                            height={20}
                        />
                    </div>
                    <ScrollArea
                        className="h-full w-full rounded-lg p-4 mt-20 text-center"
                    >
                        you dont have any task
                    </ScrollArea>
                </CardContent>

                <CardFooter>

                    <Dialog>

                        <DialogTrigger asChild>
                            <Button>Add Task</Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">

                            <DialogHeader>
                                <DialogTitle>Add task</DialogTitle>
                            </DialogHeader>

                            <div className="grid gap-4 py-4">

                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-left"
                                    >
                                        Task Name
                                    </Label>
                                    <Input
                                        id="name"
                                        defaultValue="Pedro Duarte"
                                        className="col-span-3 w-1/2"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">

                                    <Label
                                        htmlFor="daypicker"
                                        className="text-left"
                                    >
                                        Task Date
                                    </Label>

                                    <DatePicker />
                                </div>

                                <div>
                                    <Label>
                                        <Textarea placeholder="Write the tasks." />
                                    </Label>
                                </div>
                            </div>

                            <DialogFooter>
                                <Button type="submit">Save Task</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </div >
    )
}
