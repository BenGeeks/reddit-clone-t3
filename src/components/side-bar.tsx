import Link from "next/link";
import React from "react";
import {
  IoHomeOutline,
  IoPeopleOutline,
  IoFilterCircleOutline,
} from "react-icons/io5";
import { BsArrowUpRightCircle } from "react-icons/bs";

const SideBar = () => {
  const sideNav = [
    { icon: <IoHomeOutline />, label: "Home", link: "/" },
    { icon: <BsArrowUpRightCircle />, label: "Popular", link: "/popular" },
    { icon: <IoPeopleOutline />, label: "Explore", link: "/explore" },
    { icon: <IoFilterCircleOutline />, label: "All", link: "/all" },
  ];
  return (
    <div className="flex w-1/5 flex-col border-r border-slate-600 p-5 font-extralight text-neutral-200">
      {sideNav.map((nav) => {
        return (
          <Link
            key={nav.label}
            href={nav.link}
            className="flex items-center rounded-md p-3 transition-colors duration-500 ease-out hover:bg-zinc-800"
          >
            <span className="mr-2 text-2xl">{nav.icon}</span>
            <span className="mr-2 text-sm">{nav.label}</span>
          </Link>
        );
      })}
      <hr className="my-3 border-t border-slate-600" />
    </div>
  );
};

export default SideBar;
