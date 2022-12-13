import Link from "next/link";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-4 text-gray-300">
      <div className="center px-6">
        <div className="container flex flex-col items-center justify-between divide-y-2 md:flex-row md:divide-y-0 md:items-start md:justify-around">
          <div className="p-2 text-center">
            <h1 className="text-3xl font-semibold mb-1">LT.</h1>
            <h2 className="text-gray-300">Luzzitto Tupaz Portfolio</h2>
          </div>
          <div className="p-2 flex flex-col items-center">
            <h2 className="font-bold text-xl py-2">Socials</h2>
            <div className="flex flex-col items-center gap-0">
              <Link
                href="https://github.com/Luzzitto"
                className="btn text-gray-300 hover:text-white"
              >
                Github
              </Link>
              <Link
                href="mailto:luzzittot@outlook.com"
                className="btn text-gray-300 hover:text-white"
              >
                Email
              </Link>
            </div>
          </div>
          <div className="p-2 flex flex-col items-center">
            <h2 className="font-bold text-xl py-2">Quick Links</h2>
            <div className="flex flex-col items-center gap-0">
              <Link href="/" className="btn text-gray-300 hover:text-white">
                Home
              </Link>
              <Link
                href="/about"
                className="btn text-gray-300 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="btn text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <small>&copy; Copyright {year}, Luzzitto Tupaz</small>
      </div>
    </footer>
  );
};

export default Footer;
