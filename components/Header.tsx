"use client";

import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Cpu,
	Gamepad2,
	Keyboard,
	Laptop,
	Menu,
	Monitor,
	MonitorCog,
	Printer,
	ShoppingCart,
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


const sections = ["home", "about", "products", "services", "contact"] as const;
type Section = (typeof sections)[number];

const products = [
	{
		title: "PC Sets",
		icon: Monitor,
		description:
			"Complete desktop packages for home, school, and office use, ready to plug in and perform from day one.",
	},
	{
		title: "Gaming PCs",
		icon: Gamepad2,
		description:
			"High-performance gaming rigs built for smooth gameplay, fast load times, and room to upgrade.",
	},
	{
		title: "Laptops",
		icon: Laptop,
		description:
			"A wide range of laptops for students, professionals, and creators, from everyday models to performance machines.",
	},
	{
		title: "Peripherals",
		icon: Keyboard,
		description:
			"Monitors, keyboards, mice, headsets, webcams, speakers, and other accessories to complete any setup.",
	},
	{
		title: "Printers",
		icon: Printer,
		description:
			"Reliable printing, scanning, and copying solutions for home, small business, and office needs.",
	},
	{
		title: "Computer Parts",
		icon: Cpu,
		description:
			"Processors, graphics cards, memory, storage, motherboards, power supplies, and cooling for builds and upgrades.",
	},
] as const;

const services = [
	{
		icon: ShoppingCart,
		title: "Custom PC Build & Upgrade",
		description:
			"Systems built and upgraded to your budget and performance goals, with compatible, quality components.",
	},
	{
		icon: Laptop,
		title: "Installation & Setup",
		description:
			"Hands-on setup of computers, printers, and peripherals, including operating system and software installation.",
	},
	{
		icon: MonitorCog,
		title: "Repair & Troubleshooting",
		description:
			"Diagnosis and repair of hardware and software problems to get you back up and running quickly.",
	},
	{
		icon: Printer,
		title: "Preventive Maintenance",
		description:
			"Cleaning, tune-ups, and system checks that extend equipment life and prevent costly breakdowns.",
	},
	{
		icon: MonitorCog,
		title: "Office & Business Solutions",
		description:
			"Bulk equipment supply and workstation setups tailored to the needs of offices and small businesses.",
	},
	{
		icon: ShoppingCart,
		title: "After-Sales Support",
		description:
			"Friendly, responsive support and guidance on warranty and product concerns after your purchase.",
	},
] as const;

const ProtechpcLogo = (): JSX.Element => (
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
			<div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
				<div>
					<Link href="/" onClick={() => { window.location.href = "/"; }}>
						<ProtechpcLogo />
					</Link>
				</div>

				{/* Desktop Nav */}
				<NavigationMenu className="hidden md:flex max-w-none flex-none">
					<NavigationMenuList className="gap-10">
						{sections.map((section) => (
							<NavigationMenuItem key={section}>
								{section === "products" ? (
									<>
										<NavigationMenuTrigger
											className={`${getLinkClass(section)} cursor-pointer rounded-none px-0 hover:bg-transparent focus:bg-transparent`}
											aria-current={activeSection === section ? "page" : undefined}
										>
											Products
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[min(90vw,640px)] grid-cols-2 gap-1 p-2">
												{products.map((product) => (
													<li key={product.title}>
														<NavigationMenuLink
															className="cursor-pointer items-start gap-3"
															render={
																<a href="#products" className="cursor-pointer items-start">
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
																</a>
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
											className={`${getLinkClass(section)} cursor-pointer rounded-none px-0 hover:bg-transparent focus:bg-transparent`}
											aria-current={activeSection === section ? "page" : undefined}
										>
											Services
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="grid w-[min(90vw,640px)] grid-cols-2 gap-1 p-2">
												{services.map((service) => (
													<li key={service.title}>
														<NavigationMenuLink
															className="cursor-pointer items-start gap-3"
															render={
																<a href="#services" className="cursor-pointer items-start">
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
																</a>
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
												<Link
													href="/"
													onClick={() => { window.location.href = "/"; }}
												>
													{section.charAt(0).toUpperCase() + section.slice(1)}
												</Link>
											) : (
												<a href={`#${section}`}>
													{section.charAt(0).toUpperCase() + section.slice(1)}
												</a>
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
						className="text-muted-foreground"
					>
						{isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
					</button>
				</div>
				<div className="hidden md:flex items-center">
					<ModeToggle />
					<div className="mx-2 h-6 border-l border-border" aria-hidden="true" />
					<Link href="https://www.facebook.com/ProTechPcStore" target="_blank" rel="noopener noreferrer" aria-label="Visit ProtechPC on Facebook">
						<Image src={facebook} alt="Facebook" className="mx-2 h-5 w-5" />
					</Link>
					
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
							onClick={() => {
								setIsOpen(false);
								window.location.reload();
							}}
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
				<ModeToggle />
			</div>
		</header>
	);
};

export default Header;
