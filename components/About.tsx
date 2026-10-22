import React from 'react'

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="border-t border-border bg-muted/30 py-20 sm:py-28"
        >
            <div className="container mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <h2
                            id="about-title"
                            className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl"
                        >
                            Technology solutions built around you.
                        </h2>
                        <div className="grid gap-4 pt-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-border bg-background p-5">
                                <p className="text-2xl font-semibold text-foreground">01</p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Quality products
                                </p>
                            </div>

                            <div className="rounded-xl border border-border bg-background p-5">
                                <p className="text-2xl font-semibold text-foreground">02</p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Reliable service
                                </p>
                            </div>

                            <div className="rounded-xl border border-border bg-background p-5">
                                <p className="text-2xl font-semibold text-foreground">03</p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Customer-first support
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 text-base leading-8 text-muted-foreground">
                        <p>
                            ProtechPC provides reliable computer products and professional IT
                            services for homes, businesses, schools, and gaming enthusiasts.
                            We make technology easier to understand, maintain, and enjoy.
                        </p>

                        <p>
                            From building a high-performance gaming PC to repairing a laptop,
                            cleaning your computer, or setting up office equipment, our team
                            focuses on quality workmanship, honest advice, and dependable
                            support.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
}