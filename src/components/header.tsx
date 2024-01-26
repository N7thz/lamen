import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/toggle-mode"

export const Header = () => {

    return (

        <header
            className="w-full h-16 flex justify-between items-center 
        bg-zinc-100 dark:bg-zinc-950"
        >
            <ModeToggle 
                className="ml-4"
            />
            <Avatar className="mr-4">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>N7</AvatarFallback>
            </Avatar>
        </header>
    )
}
