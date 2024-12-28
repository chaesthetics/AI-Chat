import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";

const VersionSelector = () => {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center hover:bg-gray-50 px-3 py-2 rounded">
            <span className="text-zinc-600 font-semibold">ChatGPT 4o mini</span>
            <div className="text-gray-400"><ChevronDown size={18}/></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default VersionSelector;
  