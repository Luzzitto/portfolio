import Image from "next/image";
import { getImageSize } from "next/dist/server/image-optimizer";
import { useEffect } from "react";

interface SkillItemProp {
  name: string;
  logo: string;
  proficiency: number;
}

function colorPicker() {
  let colors = ["fuchsia", "blue", "green", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function SkillItem({ name, logo, proficiency }: SkillItemProp) {
  let randomColor = colorPicker();
  return (
    <div className="grow flex items-center px-4 py-4">
      <div className="h-20 w-20">
        <Image
          src={logo}
          alt={name}
          width={100}
          height={100}
          className="min-w-full min-h-full"
        />
      </div>
      <div className="pl-3 w-full">
        <h1 className="text-lg font-semibold">{name}</h1>
        <div className="relative pt-1 w-full">
          <div
            className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${randomColor}-200`}
          >
            <div
              style={{ width: proficiency + "%" }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${randomColor}-500`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Skills = () => {
  let skills = [
    {
      name: "Python",
      logo: "/images/python/python-logo-only.svg",
      proficiency: 35,
    },
    {
      name: "PHP",
      logo: "/images/php/new-php-logo.svg",
      proficiency: 55,
    },
    {
      name: "Javascript",
      logo: "/images/js/js.png",
      proficiency: 65,
    },
    {
      name: "Next.js",
      logo: "/images/nextjs/next-logo.svg",
      proficiency: 35,
    },
    {
      name: "TailwindCSS",
      logo: "/images/tailwind/tailwind-logo.svg",
      proficiency: 50,
    },
    {
      name: "Bootstrap",
      logo: "/images/bootstrap/bootstrap-logo.svg",
      proficiency: 25,
    },
  ];
  skills.sort((a, b) => b.proficiency - a.proficiency);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto md:w-1/8 px-6 py-12">
        <h1 className="text-4xl mb-2 font-medium">Skills</h1>
        <div className="flex flex-col justify-start md:grid md:grid-cols-2 md:gap-4">
          {skills.map((e) => {
            return (
              <SkillItem
                name={e.name}
                logo={e.logo}
                proficiency={e.proficiency}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
