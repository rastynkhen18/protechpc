import React from "react";
import Image from "next/image";
import Link from "next/link";
import Protechpc from "@/assets/protechpc.png";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const ProtechpcLogo = (): React.JSX.Element => (
  <Image src={Protechpc} alt="ProtechPC Logo" className="h-8 w-auto" />
);

export default function Header2() {
  return (
    <div>
        <header>
         <Link href="/" onClick={() => { window.location.href = "/"; }}><ProtechpcLogo /></Link>
        </header>

        <nav className={navigationMenuTriggerStyle()}>
        </nav>
    </div>
  )
}
