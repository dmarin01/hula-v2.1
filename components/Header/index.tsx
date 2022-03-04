import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
        <Link href="/">
          <a>
            <Image
              className="object-container cursor-pointer"
              src="/HULA-LOGO-Full.png"
              width={150}
              height={100}
              alt="logo"
            />
          </a>
        </Link>
        <div className="flex flex-grow justify-evenly max-w-2xl pt-5">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
      </header>
    </>
  );
}

export default Header;
