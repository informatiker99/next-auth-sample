import Link from "next/link";
import React from "react";

const adminHeader = () => {
  const headerItems = [
    { id: 1, lable: "home", href: "/" },
    { id: 2, lable: "reports", href: "/reports" },
    { id: 3, lable: "charts", href: "/charts" },
  ];

  return (
    <ul className="flex w-full box-border bg-red-200 p-1.5 capitalize">
      {headerItems.map((item) => {
        return (
          <li className="p-1.5 " key={item.id}>
            <Link href={item.href}>{item.lable}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default adminHeader;
