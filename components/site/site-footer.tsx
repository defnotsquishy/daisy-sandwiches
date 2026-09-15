import { business, mainNavigation } from "@/lib/site-data";
import { siteHref } from "@/lib/public-path";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="footer-wordmark">
            Daisy<span aria-hidden="true">✦</span>
          </p>
          <p>Freshly made at Godalming Station since 2002.</p>
        </div>
        <div>
          <h2>Visit</h2>
          <address>
            {business.address.lines.slice(1).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a href={business.directionsUrl}>Get directions</a>
        </div>
        <div className="site-footer__contact">
          <h2>Contact</h2>
          <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
          <a
            className="site-footer__email"
            href={`mailto:${business.email}`}
          >
            {business.email}
          </a>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Explore</h2>
          {mainNavigation.map((item) => (
            <a key={item.href} href={siteHref(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="site-footer__base">
        <span>© {new Date().getFullYear()} Daisy Sandwiches</span>
        <span>
          Regular hours may change. Check with Daisy before a special journey.
        </span>
      </div>
    </footer>
  );
}
