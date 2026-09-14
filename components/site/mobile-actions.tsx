import Link from "next/link";
import { business } from "@/lib/site-data";

export function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Quick actions">
      <Link href="/menu">Menu</Link>
      <a href={`tel:${business.phoneHref}`}>Call</a>
      <Link href="/catering#enquiry">Catering</Link>
    </nav>
  );
}
