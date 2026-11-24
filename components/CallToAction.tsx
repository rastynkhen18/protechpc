import React from 'react'
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function calltoaction() {
    return (
        <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-foreground px-7 py-9 text-background sm:flex-row sm:items-center sm:px-10">
            <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 size-56 rounded-full border-[24px] border-background/10"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-28 -left-16 size-64 rounded-full border-[32px] border-primary/30"
            />
            <div className="relative">
                <div className="h-px w-16 bg-primary" />
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-background/60">
                    Need a hand?
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Let&apos;s build your next setup.</h2>
            </div>
            <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
            >
                Talk to our team
                <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
        </div>
    )
}
