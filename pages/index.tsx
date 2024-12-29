import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TextareaAutosize from 'react-textarea-autosize';
import { Paperclip } from "lucide-react";
import { ArrowUp } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-y-scroll">
      <Navbar />
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col w-full max-w-[800px] gap-4 px-2">
          <span className="text-3xl text-zinc-800 text-center">
            What can I help with?
          </span>
          <div className="flex flex-col p-3 rounded-xl bg-gray-100 gap-4">
            <TextareaAutosize
              placeholder="Message AI-Chat"
              className="resize-none w-full bg-transparent outline-none placeholder-zinc-600 px-2 max-h-[350px] overflow-y-auto"
              spellCheck="false"
            />
            <div className="flex justify-between items-center px-2">
              <Paperclip size={20} className="text-gray-400"/>
              <div className="px-1.5 py-1.5 rounded-full bg-black hover:bg-zinc-600 hover:cursor-pointer text-white">
                <ArrowUp size={20} className="z-20"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
