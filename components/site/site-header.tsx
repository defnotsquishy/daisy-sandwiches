import { business, mainNavigation } from "@/lib/site-data";
import { OpenStatus } from "@/components/site/open-status";
import { publicAsset, siteHref } from "@/lib/public-path";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="utility-bar" aria-label="Quick information">
        <div className="utility-bar__inner">
          <OpenStatus />
          <span className="utility-bar__station">Godalming Station</span>
          <a href={`tel:${business.phoneHref}`}>Call {business.phoneDisplay}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-header__inner">
          <a
            className="brand"
            href={siteHref("/")}
            aria-label="Daisy Sandwiches home"
          >
            {/* The supplied logo is already pre-optimised and served at its exact display size. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={publicAsset("/images/daisy-logo.webp")}
              width="260"
              height="140"
              alt="Daisy Sandwiches"
            />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {mainNavigation.map((item) => (
              <a key={item.href} href={siteHref(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="button button--primary header-cta"
            href={siteHref("/catering#enquiry")}
          >
            Catering enquiry
          </a>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {mainNavigation.map((item) => (
                <a key={item.href} href={siteHref(item.href)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
