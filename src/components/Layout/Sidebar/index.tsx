"use client";
import React, { useState } from "react";
import { listRoutes } from "@/routes/listRoutes";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <aside className="fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 w-64 h-full duration-200 lg:flex transition-width lg:w-64 hidden">
      <div className="flex relative flex-col flex-1 pt-0 min-h-0 bg-gray-50">
        <div className="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
          <div className="flex-1 bg-gray-50 px-3">
            <ul className="pb-2 pt-1">
              {listRoutes.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="menu-item">
                    <div className="menu-item-icon">{item.icon}</div>
                    <span className="menu-item-label">{}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
