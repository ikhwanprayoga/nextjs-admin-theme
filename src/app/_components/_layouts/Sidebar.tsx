"use client";

import React, { Fragment, useEffect, useState } from "react";
import Icon from "../Icon";
import Link from "next/link";
import clsx from "clsx";
import { MenuProps } from "@/types";
import { usePathname } from "next/navigation";

function Sidebar({ menu }: MenuProps) {
  const pathname = usePathname();

  return (
    <aside className="bg-white">
      <div className="py-6 px-8">
        <h2 className="flex items-center gap-1 font-bold">
          <span className="text-[#4880FF]">Logo</span>
          <span className="text-[#202224]">Disini</span>
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {menu.map((m, menuKey) => (
          <Fragment key={`menu-${menuKey}`}>
            {menuKey > 0 && <div className="border-b my-2" />}
            {m.menu && (
              <h2 className="text-[#202224] text-[12px] font-bold uppercase pl-11">
                {m.menu}
              </h2>
            )}
            {m.items && m.items.length > 0 && (
              <ul>
                {m.items.map((item, itemKey) => (
                  <li key={`item-${itemKey}`}>
                    <Link href={`/${item.url}`}>
                      <div className="flex gap-5 my-1 pr-6">
                        <div
                          className={clsx(
                            "bg-none w-1 rounded-r-lg",
                            pathname.includes(item.url) && "!bg-[#4880FF]"
                          )}
                        />
                        <div
                          className={clsx(
                            "flex-1 flex items-center gap-4 py-3 px-5 text-[#202224] rounded-md",
                            pathname.includes(item.url) &&
                              "bg-[#4880FF] !text-white hover:!bg-[#4880FF] hover:!text-white",
                            "hover:bg-[#487fff0e]"
                          )}
                        >
                          <Icon
                            name={item.icon.toString()}
                            className={clsx(
                              "w-5 h-5 stroke-[#202224]",
                              pathname.includes(item.url) &&
                                "stroke-white hover:stroke-[#7d7d7d]"
                            )}
                          />
                          <span className="font-semibold text-sm  tracking-[0.3px]">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
