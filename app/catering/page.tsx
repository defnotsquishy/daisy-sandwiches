import type { Metadata } from "next";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { ResponsivePicture } from "@/components/site/responsive-picture";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Catering in Godalming",
  description:
    "Plan office catering, meeting food, celebrations and private functions with Daisy Sandwiches in Godalming.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return (
    <SiteFrame>
      <header className="page-intro page-intro--split">
        <div>
          <p className="eyebrow">Daisy catering</p>
          <h1>Catering made easy.</h1>
          <p>
            Fresh food for office meetings, celebrations and private functions,
            prepared by the same family-run team at Godalming Station.
          </p>
          <a className="button button--primary" href="#enquiry">
            Plan your catering
          </a>
        </div>
        <ResponsivePicture
          baseName="sandwich-platter"
          alt="A generous platter of Daisy sandwiches ready for catering"
          width={3264}
          height={2448}
          eager
        />
      </header>

      <section
        className="catering-types section-shell"
        aria-labelledby="types-title"
      >
        <div className="section-heading">
          <p className="eyebrow">What Daisy caters for</p>
          <h2 id="types-title">Tell us the occasion.</h2>
        </div>
        <div className="type-list">
          <article>
            <h3>Office meetings</h3>
            <p>
              Sandwiches, wraps, savouries and cakes for meetings and team
              lunches.
            </p>
          </article>
          <article>
            <h3>Celebrations</h3>
            <p>
              Freshly prepared food for birthdays, lunch parties and other
              special occasions.
            </p>
          </article>
          <article>
            <h3>Private functions</h3>
            <p>
              A bespoke menu discussed directly with Daisy for your function and
              guest numbers.
            </p>
          </article>
        </div>
      </section>

      <section className="catering-gallery" aria-label="Daisy food gallery">
        <ResponsivePicture
          baseName="savouries"
          alt="Freshly baked savoury pastries made by Daisy"
          width={4608}
          height={3456}
        />
        <ResponsivePicture
          baseName="salad-ingredients"
          alt="Fresh salad ingredients ready at Daisy's counter"
          width={2990}
          height={2247}
        />
      </section>

      <section
        className="options-section section-shell"
        aria-labelledby="options-title"
      >
        <div>
          <p className="eyebrow">Available options</p>
          <h2 id="options-title">Built around Daisy’s counter.</h2>
        </div>
        <ul>
          <li>Sandwiches and wraps</li>
          <li>Savouries and cakes</li>
          <li>Salad boxes</li>
          <li>Hot and cold drinks</li>
        </ul>
        <p>
          Options, quantities and dietary requirements are agreed with Daisy. No
          dietary suitability is assumed on this website.
        </p>
      </section>

      <section className="testimonial-band">
        <blockquote>
          <p>
            “The food was delicious, almost every guest asked where the food was
            from and we had lots of empty plates.”
          </p>
          <cite>Customer review published by Daisy</cite>
        </blockquote>
      </section>

      <section
        className="enquiry-section section-shell"
        id="enquiry"
        aria-labelledby="enquiry-title"
      >
        <div className="enquiry-section__intro">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="enquiry-title">Plan your catering.</h2>
          <p>
            Share the practical details and Daisy can reply with the next steps.
            We’ll prepare an email draft with everything collected here.
          </p>
        </div>
        <EnquiryForm kind="catering" />
      </section>
    </SiteFrame>
  );
}
