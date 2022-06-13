import Link from "next/link";
import router from "next/router";
import React from "react";

interface MenuCollapseProps {
  title: string;
  children: React.ReactNode;
  path: string;
}

export const MenuCollapse: React.FC<MenuCollapseProps> = ({
  title,
  children,
  path,
}) => {
  const isActive = router.pathname.substring(1).includes(path) ? true : false;
  console.log(router.pathname.substring(1));
  console.log(path);
  console.log("isActive", isActive);

  const [isOpen, setIsOpen] = React.useState(isActive);

  return (
    <div
      className={`collapse collapse-arrow ${
        isOpen ? "collapse-open" : "collapse-close"
      } `}
    >
      <input
        type="checkbox"
        className="peer"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div
        className={`collapse-title rounded-xl text-xl ${
          isActive ? "bg-primary text-white" : "bg-white text-black"
        } peer-checked:bg-primary peer-checked:text-white`}
      >
        {title}
      </div>
      <div className="collapse-content w-full flex flex-col">{children}</div>
    </div>
  );
};
