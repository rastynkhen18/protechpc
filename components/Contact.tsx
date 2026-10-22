import React from 'react'

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="bg-background py-16 sm:py-20"
        >
            <div className="container mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-12">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Let's keep your technology running.
                    </p>

                    <h2
                        id="contact-title"
                        className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                        Contact Us
                    </h2>

                    <p className="mt-4 max-w-md leading-7 text-muted-foreground">
                        Have a question about our products or services? Send us a message
                        and we&apos;ll get back to you as soon as possible.
                    </p>

                    <p>Phone: 0967 082 1565</p>
                    <p>Email: protechpcstore@gmail.com</p>
                </div>

                <form
                    action="mailto:protechpcstore@gmail.com"
                    method="post"
                    encType="text/plain"
                    className="grid gap-6"
                >
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            className="resize-y rounded-lg border border-input bg-background px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <button
                        type="submit"
                        className="h-11 w-full rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-fit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
