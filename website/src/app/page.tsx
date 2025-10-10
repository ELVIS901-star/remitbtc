import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            Webxite
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="#features" className="hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#pricing" className="hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
          </nav>
          <Link
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background h-10 px-5 text-sm font-medium hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 text-center">
          <p className="mx-auto mb-4 max-w-xl text-xs uppercase tracking-[0.2em] text-foreground/70">
            A modern website starter
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Build and launch your website in minutes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/80 sm:text-lg">
            Webxite ships with a clean, responsive design, sensible defaults, and SEO baked in.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background h-11 px-6 text-sm font-medium hover:opacity-90"
            >
              Start free
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/15 h-11 px-6 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6">
              <h3 className="font-semibold mb-2">Fast by default</h3>
              <p className="text-sm text-foreground/80">
                Next.js App Router, TypeScript, and Tailwind CSS for optimized performance.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6">
              <h3 className="font-semibold mb-2">SEO-ready</h3>
              <p className="text-sm text-foreground/80">
                Metadata, sitemap, and robots all set up so you rank sooner.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/15 p-6">
              <h3 className="font-semibold mb-2">Responsive design</h3>
              <p className="text-sm text-foreground/80">
                Looks great on phones, tablets, and desktops out of the box.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="rounded-2xl border border-black/10 dark:border-white/15 p-8 text-center">
            <h3 className="text-2xl font-semibold tracking-tight">Simple pricing</h3>
            <p className="mt-2 text-sm text-foreground/80">Free forever for personal sites.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-sm text-foreground/70">per month</span>
            </div>
          </div>
        </section>

        <section id="get-started" className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">Ready to launch?</h3>
          <p className="mt-2 text-sm text-foreground/80">Edit this page at <code>src/app/page.tsx</code> and deploy.</p>
        </section>
      </main>

      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Webxite. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
