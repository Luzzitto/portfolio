import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface NavItemProp {
  name: string;
  href: string;
  isFirst?: boolean;
}

const NavItem = ({ name, href, isFirst = false }: NavItemProp) => {
  const router = useRouter();
  const isActive = router.asPath === href ? true : false;
  return (
    <Link
      href={href}
      className={`block ${
        !isFirst ? "mt-1" : ""
      } hover:bg-gray-800 hover:text-white px-2 rounded py-1 ${
        isActive ? "bg-gray-800 text-white" : ""
      } md:mt-1`}
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      name: "Home",
      href: "/",
      isFirst: true,
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="bg-white shadow-lg relative top-0 md:flex md:items-center md:justify-between">
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="">
          <h1 className="text-4xl font-semibold">LT.</h1>
        </div>
        <div className="block md:hidden">
          <button onClick={(e) => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {/* Hamburger */}
              <path
                className={`${isOpen ? "hidden" : "block"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
              {/* X mark */}
              <path
                className={`${isOpen ? "block" : "hidden"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-4 transition ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-center md:pb-2 md:gap-2`}
      >
        {items.map((e) => {
          return <NavItem href={e.href} name={e.name} isFirst={e.isFirst} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
