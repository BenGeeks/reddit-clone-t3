import { getServerSession } from "next-auth";
import React from "react";
import { FaReddit } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { CiBellOn } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";

const Header = async () => {
  const session = await getServerSession();
  console.log("SESSION: ", session);
  return (
    <div className="flex justify-between border-b border-slate-600 px-5 py-2">
      <div className="flex items-center">
        <span className="p-1 text-3xl text-red-400">
          <FaReddit />
        </span>
        <span className="p-1 text-3xl">reddit</span>
      </div>
      <div className="flex">
        <Button variant="ghost" size="lg">
          <span>
            <AiOutlinePlus className="mr-1 text-2xl font-light" />
          </span>
          <span className="font-light">Create</span>
        </Button>
        <Button variant="ghost" size="icon">
          <CiBellOn className="text-3xl" />
        </Button>
        {session && (
          <Button variant="ghost" size="icon">
            <Avatar>
              <AvatarImage src={session?.user?.image || ""} alt="user image" />
              <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
