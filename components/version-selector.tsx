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
            <DropdownMenuItem className="hover:bg-gray-100 animation-300 duration-300 hover:cursor-pointer">
                ChatGPT-3.5
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 animation-300 duration-300 hover:cursor-pointer">
                ChatGPT-3.5 Turbo
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 animation-300 duration-300 hover:cursor-pointer">
                ChatGPT-4
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 animation-300 duration-300 hover:cursor-pointer">
                ChatGPT-4o
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default VersionSelector;
  