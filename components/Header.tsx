"use client";

import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Protechpc from "@/assets/protechpc.png";
import { ModeToggle } from "@/components/mode-toggle";

const sections = ["home", "about", "products", "services", "contact"] as const;
type Section = (typeof sections)[number];

const Logo = (): JSX.Element => (
	<Image src={Protechpc} alt="ProtechPC Logo" className="h-8 w-auto" />
);


const Header = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<Section>("home");
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Detect active section while scrolling
			const scrollPosition = window.scrollY + 150; // adjust for header height
			let current: Section = "home";
			sections.forEach((section) => {
				const element = document.getElementById(section);
				if (element && element.offsetTop <= scrollPosition) {
					current = section;
				}
			});
			setActiveSection(current);
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (
				mobileMenuRef.current &&
				event.target instanceof Node &&
				!mobileMenuRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const getLinkClass = (section: Section): string =>
		`pb-1 transition-all duration-300 ${activeSection === section
			? "border-b-2 border-primary"
			: "border-b-2 border-transparent"
		}`;

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
				? "bg-background text-foreground shadow-md"
				: "bg-background text-foreground"
				}`}
		>
			<div className="flex justify-between md:justify-around items-center px-8 py-4">
				<div>
					<Link href="/">
						<Logo />
					</Link>
				</div>

				{/* Desktop Nav */}
				<nav
					className={`hidden md:flex justify-center items-center gap-10 ${scrolled
						? "text-foreground"
						: "text-foreground"
						}`}
				>
					{sections.map((section) => (
						section === "home" ? (
							<Link
								key={section}
								href="/"
								className={getLinkClass(section)}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</Link>
						) : (
							<a
								key={section}
								href={`#${section}`}
								className={getLinkClass(section)}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</a>
						)
					))}

					<ModeToggle />
				</nav>

				{/* Burger Icon */}
				<div className="md:hidden z-20">
					{isOpen ? (
						<X
							size={28}
							onClick={() => setIsOpen(false)}
							className={`cursor-pointer ${scrolled
								? "text-muted-foreground"
								: "text-muted-foreground"
								}`}
						/>
					) : (
						<Menu
							size={28}
							onClick={() => setIsOpen(true)}
							className={`cursor-pointer ${scrolled
								? "text-muted-foreground"
								: "text-muted-foreground"
								}`}
						/>
					)}
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 z-30 top-16 md:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Mobile Menu */}
			<div
				ref={mobileMenuRef}
				className={`fixed z-40 top-16 right-0 w-4/5 max-w-sm h-screen ${scrolled
					? "bg-card text-foreground"
					: "bg-card text-foreground"
					} flex flex-col justify-start items-start gap-6 px-10 py-5 text-base transition-all duration-300 md:hidden ${isOpen
						? "translate-x-0 opacity-100"
						: "translate-x-full opacity-0 pointer-events-none"
					} ${scrolled
						? "text-foreground"
						: "text-foreground"
					}`}
			>
				{sections.map((section) => (
					section === "home" ? (
						<Link
							key={section}
							href="/"
							className={getLinkClass(section)}
							onClick={() => setIsOpen(false)}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</Link>
					) : (
						<a
							key={section}
							href={`#${section}`}
							className={getLinkClass(section)}
							onClick={() => setIsOpen(false)}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</a>
					)
				))}
				
			</div>
		</header>
	);
};

export default Header;
