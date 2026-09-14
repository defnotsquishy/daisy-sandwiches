import Link from "next/link";
import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteFrame>
      <section className="not-found section-shell">
        <p className="eyebrow">Wrong platform</p>
        <h1>That page has moved on.</h1>
        <p>
          Try the menu, head back to the homepage, or contact Daisy directly.
        </p>
        <div className="button-row">
          <Link className="button button--primary" href="/menu">
            View the menu
          </Link>
          <Link className="button button--secondary" href="/">
            Go home
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
