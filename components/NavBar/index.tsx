/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import navBarAPI from "../../utils/requests";

function NavBar() {
  return (
    <nav>
      <div className="flex overflow-auto">
        {Object.entries(navBarAPI).map(([key, { title, url }]) => (
          <div className="px-6" key={key}>
            <Link href={url}>
              <h2>{title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
