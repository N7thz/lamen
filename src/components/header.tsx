import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/toggle-mode"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export const Header = () => {

    return (

        <header
            className="w-full h-16 flex justify-end items-center 
            bg-zinc-100 dark:bg-zinc-950"
        >
            <Sheet>
                <SheetTrigger asChild>
                    <Avatar className="mr-4 cursor-pointer">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback>N7</AvatarFallback>
                    </Avatar>
                </SheetTrigger>
                
                <SheetContent>
                    <ModeToggle
                        className="ml-4"
                    />
                </SheetContent>
            </Sheet>
        </header>
    )
}
