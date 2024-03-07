import React from "react";
import Icon from "../Icon";
import Image from "next/image";

function Topbar() {
  return (
    <div className="px-8 py-4 flex items-center justify-between bg-white">
      <div>
        <Icon name="menu" className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border bg-[#F5F6FA]">
            <Image
              src="/assets/avatar-1.svg"
              alt="logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-sm text-[#404040]">Moni Roy</h4>
            <h4 className="text-xs text-[#565656}">Admin</h4>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full border flex items-center justify-center">
          <Icon name="chevron-down" className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
