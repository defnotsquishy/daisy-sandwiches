import type { Metadata } from "next";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { ResponsivePicture } from "@/components/site/responsive-picture";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Daisy Events Trailer",
  description:
    "Meet Daisy, the events trailer available for community events and private hire around Godalming.",
  alternates: { canonical: "/trailer" },
};

export default function TrailerPage() {
  return (
    <SiteFrame>
      <header className="trailer-hero">
        <ResponsivePicture
          baseName="daisy-trailer"
          alt="Daisy's events trailer open for service at a community event"
          width={2099}
          height={1576}
          eager
        />
        <div className="trailer-hero__copy">
          <p className="eyebrow">Community events · private hire</p>
          <h1>Meet Daisy.</h1>
          <p>
            The events trailer joined the business in 2025, taking Daisy’s food
            on the road to local community events and private hire.
          </p>
          <a className="button button--primary" href="#enquiry">
            Ask about your event
          </a>
        </div>
      </header>

      <section
        className="trailer-menu section-shell"
        aria-labelledby="trailer-menu-title"
      >
        <div>
          <p className="eyebrow">From the hatch</p>
          <h2 id="trailer-menu-title">What Daisy serves.</h2>
        </div>
        <ul>
          <li>
            <strong>Made-to-order</strong>
            <span>Sandwiches and toasties</span>
          </li>
          <li>
            <strong>Homemade</strong>
            <span>Cakes and savouries</span>
          </li>
          <li>
            <strong>Alongside</strong>
            <span>Cold drinks and snacks</span>
          </li>
        </ul>
        <p>
          Daisy publishes that products catering for dietary requirements are
          stocked. Please discuss specific ingredients and allergens directly
          before your event.
        </p>
      </section>

      <section className="trailer-story">
        <div>
          <p className="eyebrow">On the road</p>
          <h2>A familiar counter, somewhere new.</h2>
          <p>
            The trailer extends the station-shop welcome to appropriate
            community events and private occasions, with food prepared to the
            same straightforward Daisy style.
          </p>
        </div>
        <ResponsivePicture
          baseName="sandwich-platter"
          alt="Daisy sandwiches prepared and arranged for sharing"
          width={3264}
          height={2448}
        />
      </section>

      <section
        className="enquiry-section section-shell"
        id="enquiry"
        aria-labelledby="trailer-enquiry-title"
      >
        <div className="enquiry-section__intro">
          <p className="eyebrow">Bring Daisy along</p>
          <h2 id="trailer-enquiry-title">Tell us about your event.</h2>
          <p>
            Share the date, place and approximate guest numbers. We’ll prepare
            an email draft, ready for you to review.
          </p>
        </div>
        <EnquiryForm kind="trailer" />
      </section>
    </SiteFrame>
  );
}
