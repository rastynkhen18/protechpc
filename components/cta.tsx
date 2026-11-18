import React from 'react'
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function cta() {
    return (
        <section className="mx-auto max-w-7xl my-5 sm:px-10 lg:px-12">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-primary px-7 py-9 text-primary-foreground sm:flex-row sm:items-center sm:px-10">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                        Need a hand?
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">Let&apos;s build your next setup.</h2>
                </div>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                    Talk to our team
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    )
}
