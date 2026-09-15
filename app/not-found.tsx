import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/site-frame";
import { siteHref } from "@/lib/public-path";

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
          <a className="button button--primary" href={siteHref("/menu")}>
            View the menu
          </a>
          <a className="button button--secondary" href={siteHref("/")}>
            Go home
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
