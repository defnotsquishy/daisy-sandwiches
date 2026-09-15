import type { Metadata } from "next";
import { ResponsivePicture } from "@/components/site/responsive-picture";
import { SiteFrame } from "@/components/site/site-frame";
import { siteHref } from "@/lib/public-path";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Daisy Sandwiches, a family-run independent sandwich and coffee shop at Godalming Station since 2002.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <header className="page-intro page-intro--about">
        <div>
          <p className="eyebrow">Family run · established 2002</p>
          <h1>The little shop at the station.</h1>
          <p>
            Daisy Sandwiches is an independent family-run coffee and sandwich
            shop inside Godalming Railway Station.
          </p>
        </div>
        <ResponsivePicture
          baseName="shop-window"
          alt="Daisy Sandwiches' serving window at Godalming Station"
          width={2448}
          height={2448}
          eager
        />
      </header>

      <section
        className="about-story section-shell"
        aria-labelledby="story-heading"
      >
        <div className="about-story__year" aria-hidden="true">
          2002
        </div>
        <div>
          <p className="eyebrow">Our story</p>
          <h2 id="story-heading">Made here, every day.</h2>
          <p>
            Daisy’s approach is simple: prepare sandwiches to order, bake cakes
            to the team’s own recipes, make coffee properly and give people a
            warm welcome.
          </p>
          <p>
            Breakfast and lunch at the station remain at the heart of the
            business. External catering and the events trailer have grown from
            that same counter and the same local relationships.
          </p>
        </div>
      </section>

      <section className="about-photo">
        <ResponsivePicture
          baseName="shop-front"
          alt="The historic Godalming Station building with Daisy Sandwiches beside the entrance"
          width={3864}
          height={2846}
        />
        <p>
          <strong>Godalming Station</strong>
          <span>
            The shop has served commuters, visitors and local customers here
            since 2002.
          </span>
        </p>
      </section>

      <section className="about-next section-shell">
        <h2>Hungry now, planning ahead, or taking Daisy on the road?</h2>
        <div className="button-row">
          <a className="button button--primary" href={siteHref("/menu")}>
            See the menu
          </a>
          <a
            className="button button--secondary"
            href={siteHref("/catering")}
          >
            Explore catering
          </a>
          <a className="text-link" href={siteHref("/trailer")}>
            Meet the trailer <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
