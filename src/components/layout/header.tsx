"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const isAuthPage = pathname === "/" || pathname === "/sign-up";

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Map", path: "/map" },
    { name: "My Page", path: "/my" },
  ];

  return (
      <div>
        {!isAuthPage && (
            <div className="flex flex-row items-center justify-center w-[305px] mx-auto p-1 bg-gray-100 rounded-full font-medium">
              {navItems.map((item) => (
                  <Link href={item.path} key={item.name}>
                    <div
                        className={`text-center mx-3 px-2 py-1 rounded-full hover:text-gray-600 ${
                            pathname === item.path
                                ? "bg-white text-black"
                                : "hover:bg-gray-100"
                        }`}
                    >
                      {item.name}
                    </div>
                  </Link>
              ))}
            </div>
        )}
      </div>
  );
};