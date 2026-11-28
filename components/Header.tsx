"use client";

import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Cpu,
	ChevronDown,
	Keyboard,
	Laptop,
	Menu,
	Monitor,
	MonitorCog,
	Printer,
	Network,
	X,
} from "lucide-react";
import Protechpc from "@/assets/protechpc.png";
import { ModeToggle } from "@/components/mode-toggle";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import facebook from "@/assets/facebook-icon.svg";
import { usePathname } from "next/navigation";

/* eslint-disable @next/next/no-html-link-for-pages */

const sections = ["home", "products", "services", "about", "contact", "blog"] as const;
type Section = (typeof sections)[number];

const products = [
	{
		title: "Computer Sets & Packages",
		icon: Monitor,
		description:
			"Complete desktop computer sets and customized packages for home, school, office, and business use, available in a range of specifications and budgets.",
	},
	{
		title: "Laptops",
		icon: Laptop,
		description:
			"A selection of laptops for students, professionals, business users, and everyday computing needs.",
	},
	{
		title: "Printers",
		icon: Printer,
		description:
			"Inkjet, ink tank, laser, and multifunction printers suited for home offices, schools, and business operations, along with compatible supplies.",
	},
	{
		title: "Peripherals & Accessories",
		icon: Keyboard,
		description:
			"Monitors, keyboards, mice, webcams, headsets, speakers, UPS and power protection, networking devices, external storage, cables, and other accessories.",
	},
	{
		title: "Computer Parts",
		icon: Cpu,
		description:
			"Processors, motherboards, memory (RAM), storage drives (SSD and HDD), graphics cards, power supplies, cases, and cooling components for new builds and upgrades.",
	},
	{
		title: "Laptop Parts",
		icon: Cpu,
		description:
			"Replacement batteries, chargers and adapters, screens, keyboards, storage, memory, and other laptop components.",
	},
] as const;

const services = [
	{
		icon: MonitorCog,
		title: "IT Support",
		description:
			"On-site and remote technical assistance for hardware, software, and network concerns, helping clients resolve issues quickly and get back to work.",
	},
	{
		icon: MonitorCog,
		title: "Preventive Maintenance",
		description:
			"Scheduled inspection, cleaning, updates, performance checks, and system health monitoring to extend equipment life and minimize unexpected downtime.",
	},
	{
		icon: MonitorCog,
		title: "Computer & Laptop Repair",
		description:
			"Diagnostics, troubleshooting, hardware replacement, and component-level support for desktops and laptops.",
	},
	{
		icon: Cpu,
		title: "Upgrades & Optimization",
		description:
			"RAM, SSD, and component upgrades, plus operating system and software optimization to improve speed and performance.",
	},
	{
		icon: Printer,
		title: "Installation & Security Support",
		description:
			"Setup of new computers, printers, peripherals, operating system installations, data backup, virus and malware removal.",
	},
	{
		icon: Network,
		title: "Networking Support",
		description:
			"Basic network setup, Wi-Fi configuration, and troubleshooting for homes and offices.",
	},
] as const;

const ProtechpcLogo = (): JSX.Element => (
	<Image src={Protechpc} alt="ProtechPC Logo" className="h-8 w-auto" />
);

const Header = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState<Section>("home");
	const [mobileExpandedSection, setMobileExpandedSection] = useState<"products" | "services" | null>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

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

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
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
		document.addEventListener("keydown", handleKeyDown);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const currentSection: Section =
		pathname === "/" ? "home" : (pathname.slice(1) as Section);

	const isHomePage = pathname === "/";

	const getLinkClass = (section: Section): string =>
		`relative border-b-2 border-transparent pb-1 after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[#00b85c] after:via-[#f22932] after:to-[#1455a3] after:content-[''] after:transition-opacity after:duration-150 ${
			(isHomePage ? activeSection : currentSection) === section
				? "after:opacity-100"
				: "after:opacity-0"
		}`;

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
				? "bg-background text-foreground shadow-md"
				: "bg-background text-foreground"
				}`}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-4">
				<div>
					<a href="/">
						<ProtechpcLogo />
					</a>
				</div>

				{/* Desktop Nav */}
				<NavigationMenu className="hidden md:flex max-w-none flex-none">
					<NavigationMenuList className="gap-10">
						{sections.map((section) => (
							<NavigationMenuItem key={section}>
								{section === "products" ? (
									<>
										<NavigationMenuTrigger
											className="cursor-pointer rounded-none !h-auto !p-0 [&>svg]:!top-0 hover:bg-transparent focus:bg-transparent"
											aria-current={activeSection === section ? "page" : undefined}
										>
											<span className={`${getLinkClass(section)} !pb-0`}>Products</span>
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[min(90vw,640px)] grid-cols-2 gap-1 p-2">
												{products.map((product) => (
													<li key={product.title}>
														<NavigationMenuLink
															className="cursor-pointer items-start gap-3"
															render={
																<Link href="/products" className="cursor-pointer items-start">
																	<product.icon
																		className="mt-0.5 size-5 shrink-0 text-primary"
																		aria-hidden="true"
																	/>
																	<span className="flex flex-col gap-1">
																		<span className="font-medium">{product.title}</span>
																		<span className="text-muted-foreground text-xs leading-relaxed">
																			{product.description}
																		</span>
																	</span>
																</Link>
															}
														/>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : section === "services" ? (
									<>
										<NavigationMenuTrigger
											className="cursor-pointer rounded-none !h-auto !p-0 [&>svg]:!top-0 hover:bg-transparent focus:bg-transparent"
											aria-current={activeSection === section ? "page" : undefined}
										>
											<span className={`${getLinkClass(section)} !pb-0`}>Services</span>
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[min(90vw,640px)] grid-cols-2 gap-1 p-2">
												{services.map((service) => (
													<li key={service.title}>
														<NavigationMenuLink
															className="cursor-pointer items-start gap-3"
															render={
																<Link href="/services" className="cursor-pointer items-start">
																	<service.icon
																		className="mt-0.5 size-5 shrink-0 text-primary"
																		aria-hidden="true"
																	/>
																	<span className="flex flex-col gap-1">
																		<span className="font-medium">{service.title}</span>
																		<span className="text-muted-foreground text-xs leading-relaxed">
																			{service.description}
																		</span>
																	</span>
																</Link>
															}
														/>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : (
									<NavigationMenuLink
										className={`${getLinkClass(section)} cursor-pointer rounded-none p-0 hover:bg-transparent focus:bg-transparent`}
										aria-current={activeSection === section ? "page" : undefined}
										render={
											section === "home" ? (
												<a href="/">
													{section.charAt(0).toUpperCase() + section.slice(1)}
												</a>
											) : (
												<Link href={`/${section}`}>
													{section === "about"
														? "About Us"
														: section.charAt(0).toUpperCase() + section.slice(1)}
												</Link>
											)
										}
									/>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				{/* Burger Icon */}
				<div className="z-20 md:hidden">
					<button
						type="button"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						onClick={() => setIsOpen((open) => !open)}
						className="cursor-pointer rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
					>
						{isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
					</button>
				</div>
				<div className="hidden md:flex items-center">
					<ModeToggle />
					{/* <div className="mx-2 h-6 border-l border-border" aria-hidden="true" /> */}
					<Link href="https://www.facebook.com/ProTechPcStore" target="_blank" rel="noopener noreferrer" aria-label="Visit ProtechPC on Facebook">
						<Image src={facebook} alt="Facebook" className="mx-2 h-[1.2rem] w-[1.2rem]" />
					</Link>

				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ease-in-out md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
					}`}
				onClick={() => setIsOpen(false)}
				aria-hidden="true"
			/>

			{/* Mobile Menu */}
			<div
				ref={mobileMenuRef}
				className={`fixed inset-0 z-40 h-dvh w-full overflow-hidden bg-card text-foreground shadow-xl transition-[transform,opacity] duration-300 ease-in-out md:hidden ${isOpen
						? "translate-x-0 opacity-100"
						: "pointer-events-none translate-x-full opacity-0"
					}`}
			>
				<div className="flex items-center justify-between border-b border-border px-6 py-5">
					<a
						href="/"
						aria-label="Go to homepage"
						onClick={() => {
							setIsOpen(false);
						}}
					>
						<ProtechpcLogo />
					</a>
					<button
						type="button"
						aria-label="Close menu"
						onClick={() => setIsOpen(false)}
						className="cursor-pointer rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
					>
						<X size={26} aria-hidden="true" />
					</button>
				</div>
				<nav className="flex w-full flex-col px-6 text-base font-medium">
					{sections.map((section) => (
						<div key={section} className="border-b border-border">
							{section === "products" || section === "services" ? (
								<>
									<button
										type="button"
										aria-expanded={mobileExpandedSection === section}
										onClick={() => setMobileExpandedSection((current) => current === section ? null : section)}
										className={`${getLinkClass(section)} flex w-full cursor-pointer items-center justify-between border-transparent py-4 text-left`}
									>
										{section.charAt(0).toUpperCase() + section.slice(1)}
										<ChevronDown
											className={`size-4 transition-transform ${mobileExpandedSection === section ? "rotate-180" : ""}`}
											aria-hidden="true"
										/>
									</button>
									{mobileExpandedSection === section && (
										<div className="border-t border-border pb-2 pl-4">
											{(section === "products" ? products : services).map((item) => (
												<a
													key={item.title}
													href={`/${section}`}
													onClick={() => setIsOpen(false)}
													className="block cursor-pointer py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
												>
													{item.title}
												</a>
											))}
										</div>
									)}
								</>
							) : section === "home" ? (
								<a
									href="/"
									className={`${getLinkClass(section)} block cursor-pointer border-transparent py-4`}
									onClick={() => setIsOpen(false)}
								>
									Home
								</a>
							) : (
								<a
									href={`/${section}`}
									className={`${getLinkClass(section)} block cursor-pointer border-transparent py-4`}
									onClick={() => setIsOpen(false)}
								>
									{section === "about"
										? "About Us"
										: section.charAt(0).toUpperCase() + section.slice(1)}
								</a>
							)}
						</div>
					))}
				</nav>
				<div className="mt-auto flex items-center gap-4 px-6 py-6">
					<ModeToggle />
					<Link href="https://www.facebook.com/ProTechPcStore" target="_blank" rel="noopener noreferrer" aria-label="Visit ProtechPC on Facebook">
						<Image src={facebook} alt="Facebook" className="h-5 w-5" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
