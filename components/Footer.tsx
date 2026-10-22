import Image from "next/image";
import Link from "next/link";
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

      <div className="container mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <Image
            src={Protechpc}
            alt="ProtechPC Logo"
            className="h-12 w-auto"
          />
          <p className="text-sm leading-6 text-muted-foreground">
            Quality and reliable computer solutions for your home, business,
            school, and gaming needs.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <a href="#about" className="hover:text-foreground">About Us</a>
            <a href="#products" className="hover:text-foreground">Products</a>
            <a href="#services" className="hover:text-foreground">Services</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Our Services</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Custom PC Builds</li>
            <li>Computer Repair</li>
            <li>Hardware Upgrades</li>
            <li>IT Support</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Contact Us</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>2nd Floor LB Pagala Bldg., Brgy. Muzon Proper,, San Jose del Monte, Philippines, 3023</p>
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
          </div>
        </div>
      </div>

      <div className="container mx-auto flex max-w-7xl flex-col gap-4 border-t border-border px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 ProtechPC. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#home" className="hover:text-foreground">Back to top</a>
          <a href="#about" className="hover:text-foreground">About us</a>
        </div>
      </div>
    </footer>
  );
}