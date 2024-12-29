
import React from "react";
import { Edit } from "lucide-react";
import VersionSelector from "./version-selector";
import LoginModal from "./login-modal";
import SignupModal from "./signup-modal";

const Navbar = () => {
    return(
        <nav className="flex w-full px-4 py-2 items-center justify-between sticky top-0 bg-white">
            <div className="flex gap-2 items-center">
                <div className="px-2 py-2 rounded hover:bg-gray-100 hover:cursor-pointer">
                    <Edit size={20} className="text-zinc-700"/>
                </div>
                <VersionSelector />
            </div>
            <div className="flex gap-2">
                <LoginModal />
                <SignupModal />
            </div>
        </nav>
    )
}

export default Navbar;