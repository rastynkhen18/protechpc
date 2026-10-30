import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Protechpc from "@/assets/protechpc.png";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <iframe
        title="Find ProtechPC on Google Maps"
        src="https://www.google.com/maps?q=PROTECH+PC+-+Muzon&output=embed"
        className="h-72 w-full border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="max-w-7xl mx-auto grid gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <Image
            src={Protechpc}
            alt="ProtechPC Logo"
            className="h-12 w-auto"
          />
          <p className="text-sm leading-6 text-muted-foreground">
            Build Your Dream PC with Us Now. Your trusted source for PC products and IT solutions.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Our Products</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Custom Gaming PCs</li>
            <li>Laptops & Workstations</li>
            <li>PC Components & Parts</li>
            <li>Monitors & Peripherals</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Our Services</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>IT Support</li>
            <li>Preventive Maintenance</li>
            <li>Computer Repair</li>
            <li>Hardware Upgrades</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Contact Us</h3>
          <div className="space-y-3 text-sm text-muted-foreground">

            <a href="tel:+639XXXXXXXXX" className="block hover:text-foreground">
              +63 967 082 1565
            </a>
            <a
              href="mailto:protechpc@example.com"
              className="block hover:text-foreground"
            >
              protechpcstore@gmail.com
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-foreground"
            >
              Facebook
            </a>
            {/* <p>2nd Floor LB Pagala Bldg., Brgy. Muzon Proper,, San Jose del Monte, Philippines, 3023</p> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex  flex-col gap-4 border-t border-border px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 ProtechPC. All rights reserved.</p>
        <div className="hidden md:flex gap-5">
          <a href="#home" className="flex items-center gap-1 hover:text-foreground">
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}