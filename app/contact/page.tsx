import type { Metadata } from "next";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { LocationBlock } from "@/components/site/location-block";
import { SiteFrame } from "@/components/site/site-frame";
import { business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & Opening Hours",
  description:
    "Call, email or find Daisy Sandwiches at Godalming Station, and see the regular opening hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteFrame>
      <header className="contact-intro section-shell">
        <div>
          <p className="eyebrow">Contact Daisy</p>
          <h1>We’d love to hear from you.</h1>
        </div>
        <div className="contact-direct">
          <p>
            <span>Phone</span>
            <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>
          </p>
          <p>
            <span>Email</span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <p>
            <span>Trailer</span>
            <a href={`mailto:${business.trailerEmail}`}>
              {business.trailerEmail}
            </a>
          </p>
        </div>
      </header>

      <LocationBlock />

      <section
        className="enquiry-section section-shell"
        aria-labelledby="contact-form-title"
      >
        <div className="enquiry-section__intro">
          <p className="eyebrow">Write to us</p>
          <h2 id="contact-form-title">Prepare an email.</h2>
          <p>
            Use this for a general question. For catering or trailer hire, the
            dedicated enquiry pages collect the extra details Daisy needs.
          </p>
        </div>
        <EnquiryForm kind="general" />
      </section>
    </SiteFrame>
  );
}
