"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="flex items-center w-full justify-between px-16 py-4 bg-transparent">
			<Link href="/">
				<Image
					className="logo"
					src="/logo3.svg"
					alt="Boulder logo"
					width={150}
					height={100}
				/>
			</Link>

			<nav>
				<ul className="flex gap-20">
					<li>
						<Link
							href="/"
							className={cn(
								"relative cursor-pointer text-3xl capitalize after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:rounded-full after:translate-x-0 hover:after:translate-x-[80px] after:bg-cyan-900/80 after:transition-all after:duration-500",
								pathname === "/"
									? "text-cyan-700/80 after:bg-cyan-700/80"
									: "text-cyan-900/80"
							)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/events"
							className={cn(
								"relative cursor-pointer text-3xl capitalize after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:rounded-full after:translate-x-0 hover:after:translate-x-[108px] after:bg-cyan-900/80 after:transition-all after:duration-500",
								pathname === "/"
									? "text-cyan-700/80 after:bg-cyan-700/80"
									: "text-cyan-900/80"
							)}
						>
							Events
						</Link>
					</li>
					<li>
						<Link
							href="/details"
							className={cn(
								"relative cursor-pointer text-3xl capitalize after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:rounded-full after:translate-x-0 hover:after:translate-x-[112px] after:bg-cyan-900/80 after:transition-all after:duration-500",
								pathname === "/"
									? "text-cyan-700/80 after:bg-cyan-700/80"
									: "text-cyan-900/80"
							)}
						>
							Details
						</Link>
					</li>
					<li>
						<Link
							href="/login"
							className={cn(
								"relative cursor-pointer text-3xl capitalize after:content-[''] after:absolute after:top-[100%] after:left-0 after:h-2 after:w-2 after:rounded-full after:translate-x-0 hover:after:translate-x-[82px] after:bg-cyan-900/80 after:transition-all after:duration-500",
								pathname === "/"
									? "text-cyan-700/80 after:bg-cyan-700/80"
									: "text-cyan-900/80"
							)}
						>
							Login
						</Link>
					</li>
				</ul>
			</nav>

			<div>
				<div>Login</div>
			</div>
		</header>
	);
};

export default Header;
