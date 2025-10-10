import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-sm text-foreground/80">
        By using this website you agree to the following sample terms. Replace
        this content with your own legally reviewed terms before launch.
      </p>
      <ul className="mt-4 list-disc pl-5 text-sm text-foreground/80">
        <li>Use the site responsibly and lawfully.</li>
        <li>No warranties are provided; use at your own risk.</li>
        <li>These terms may change without prior notice.</li>
      </ul>
    </main>
  );
}
