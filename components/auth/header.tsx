import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>HRIS</h1> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hrM3mO6kI5coz3f35YPvEBiAKwbRXyqbtg&s" height={100} width={100} alt="ai-chat"/>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
