"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute z-10 flex w-full max-w-[1920px] items-center justify-between bg-cyan-100/80 px-16 py-3">
      <Link href="/">
        <Image
          className="logo"
          src="/header/logo3.svg"
          alt="Boulder logo"
          width={135}
          height={101}
        />
      </Link>

      <nav>
        <ul className="flex gap-20">
          <li>
            <Link
              href="/"
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[80px]",
                pathname === "/"
                  ? "text-cyan-700/80 after:translate-x-[40px]"
                  : "text-cyan-900",
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[108px]",
                pathname === "/events"
                  ? "text-cyan-700/80 after:translate-x-[54px]"
                  : "text-cyan-900",
              )}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/details"
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[108px]",
                pathname === "/details"
                  ? "text-cyan-700/80 after:translate-x-[54px]"
                  : "text-cyan-900",
              )}
            >
              Details
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={cn(
                "my-text-stroke relative cursor-pointer text-3xl font-extrabold capitalize after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:translate-x-0 after:rounded-full after:bg-amber-400 after:transition-all after:duration-500 after:content-[''] hover:after:translate-x-[114px]",
                pathname === "/gallery"
                  ? "text-cyan-700/80 after:translate-x-[57px]"
                  : "text-cyan-900",
              )}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>

      <div className="my-text-stroke">
        <Link
          className="flex items-center gap-3 text-3xl font-extrabold text-cyan-900/90"
          href="/login"
        >
          <Image
            src="/header/login.svg"
            alt="ikona za login"
            width={40}
            height={40}
          />
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
