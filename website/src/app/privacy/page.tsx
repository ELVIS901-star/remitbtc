import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-foreground/80">
        Your privacy matters. This demo site does not collect personal data. If
        you adapt this template, update this page to reflect your actual data
        practices, including what you collect, how you use it, and how users can
        contact you.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-sm text-foreground/80">
        For any privacy-related questions, contact the site owner.
      </p>
    </main>
  );
}
