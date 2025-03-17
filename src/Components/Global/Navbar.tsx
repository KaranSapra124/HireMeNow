import { useState } from "react";

interface linkInterface {
  title: string;
  link: string;
}
const Navbar = () => {
  const [links, setLinks] = useState<linkInterface[]>([
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ]);
  return (
    <div className="bg-primary-color">
        <h1>HireMeNow</h1>
      <div>
        {links?.map((elem: linkInterface, index: number) => {
          return (
            <li className="text-accent-color" key={index}>
              {elem?.title}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
