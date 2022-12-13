import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="center">
      <div className="w-full flex flex-col-reverse md:flex-row md:items-center md:justify-center md:gap-x-4 py-12 px-4">
        <div className="text-center">
          <h1 className="font-medium text-4xl">Luzzitto Tupaz</h1>
          <h2 className="text-gray-600">Cybersecurity Undergraduate</h2>
          <h3 className="text-sm text-blue-500 font-bold">
            Available for Security Clearance
          </h3>
          <div className="mt-4 center gap-4">
            <Link
              href="https://github.com/Luzzitto"
              className="flex items-center bg-[#24292f] btn text-white"
            >
              <Image
                src="/images/github-mark/github-mark-white.svg"
                alt="Github Logo"
                className="h-4 w-4"
                width={240}
                height={240}
              />
              <span className="ml-3">View Github Projects</span>
            </Link>
            <Link
              href="mailto:luzzittot@outlook.com"
              className="flex items-center bg-[#0078D4] btn text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <span className="ml-3">Email Me</span>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/Luzzitto Tupaz.jpg"
            alt="Luzzitto Tupaz Image"
            className="mx-auto w-56 md:w-64 rounded-full border-4 border-gray-900 px-2 py-2"
            width={827}
            height={827}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
