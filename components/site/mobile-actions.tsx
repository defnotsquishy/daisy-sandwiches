import { business } from "@/lib/site-data";
import { siteHref } from "@/lib/public-path";

export function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Quick actions">
      <a href={siteHref("/menu")}>Menu</a>
      <a href={`tel:${business.phoneHref}`}>Call</a>
      <a href={siteHref("/catering#enquiry")}>Catering</a>
    </nav>
  );
}
