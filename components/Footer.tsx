import Image from "next/image";
import Protechpc from "@/assets/protechpc.png";
import { Link } from "lucide-react";
import facebook from "@/assets/facebook-icon.svg";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto grid gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <Image
            src={Protechpc}
            alt="ProtechPC Logo"
            className="h-12 w-auto"
          />
          <p className="text-sm leading-5 text-muted-foreground">
            Build Your Dream PC with Us Now. Your Trusted IT Partner for Products, Support, and Preventive Maintenance.
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
            {/* <p>2nd Floor LB Pagala Bldg., Brgy. Muzon Proper,, San Jose del Monte, Philippines, 3023</p> */}
            <a
              href="mailto:protechpc@example.com"
              className="block hover:text-foreground"
            >
              protechpcstore@gmail.com
            </a>
            <a href="tel:+639XXXXXXXXX" className="block hover:text-foreground">
              0967 082 1565
            </a>
            
            <a href="https://www.facebook.com/ProTechPcStore" target="_blank" rel="noopener noreferrer" aria-label="Visit ProtechPC on Facebook">
              <Image src={facebook} alt="Facebook" className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        <p>© 2026 ProTechPC. All rights reserved.</p>
      </div>
    </footer>
  );
}