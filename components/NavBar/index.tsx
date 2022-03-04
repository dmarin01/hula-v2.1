/* eslint-disable @next/next/link-passhref */

import { useRouter } from "next/router";
import navBarAPI from "../../utils/requests";

function NavBar() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 justify-between pt-6 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(navBarAPI).map(([key, { title, url }]) => (
          <div className="px-6" key={key}>
            <h2
              className="cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-400"
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </h2>
          </div>
        ))}
      </div>
      <div className="absolute top-6 right-0 bg-gradient-to-l from-gray-800 h-10 w-1/12" />
    </nav>
  );
}

export default NavBar;
