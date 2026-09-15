import { ResponsivePicture } from "@/components/site/responsive-picture";
import { SiteFrame } from "@/components/site/site-frame";
import { LocationBlock } from "@/components/site/location-block";
import { foodCategories, reviews } from "@/lib/site-data";
import { siteHref } from "@/lib/public-path";

export default function Home() {
  return (
    <SiteFrame>
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">
            Family run <span aria-hidden="true">•</span> Godalming{" "}
            <span aria-hidden="true">•</span> Est. 2002
          </p>
          <h1>Freshly made in Godalming since 2002.</h1>
          <p className="hero__lead">
            Fresh sandwiches, coffee, homemade cakes and catering from our
            family-run shop at Godalming Station.
          </p>
          <div className="button-row">
            <a className="button button--primary" href={siteHref("/menu")}>
              View the menu
            </a>
            <a
              className="button button--secondary"
              href={siteHref("/catering")}
            >
              Catering &amp; events
            </a>
          </div>
          <ul className="trust-line" aria-label="Daisy highlights">
            <li>Made to order</li>
            <li>Open 7 days</li>
            <li>Office &amp; event catering</li>
          </ul>
        </div>
        <div className="hero__media">
          <ResponsivePicture
            baseName="shop-front"
            alt="Daisy Sandwiches in the historic Godalming railway station building"
            width={3864}
            height={2846}
            eager
          />
          <div
            className="ticket-strip"
            aria-label="Location and establishment date"
          >
            <span>
              <small>Platform</small> Godalming
            </span>
            <span>
              <small>Serving since</small> 2002
            </span>
          </div>
        </div>
      </section>
      <section
        className="food-section section-shell"
        aria-labelledby="food-title"
      >
        <div className="section-heading section-heading--offset">
          <p className="eyebrow">From the counter</p>
          <h2 id="food-title">Made here. Made fresh.</h2>
          <p>
            Sandwiches are prepared to order, cakes are baked to Daisy’s own
            recipes, and the menu is built for breakfast, lunch and the journey
            ahead.
          </p>
        </div>
        <div className="food-index">
          {foodCategories.map((category) => (
            <article key={category.name}>
              <h3>{category.name}</h3>
              <p>{category.copy}</p>
            </article>
          ))}
          <a className="text-link" href={siteHref("/menu")}>
            See the full menu <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section
        className="feature-section feature-section--catering"
        aria-labelledby="catering-title"
      >
        <ResponsivePicture
          baseName="sandwich-platter"
          alt="A platter of freshly prepared Daisy sandwiches"
          width={3264}
          height={2448}
        />
        <div className="feature-section__copy">
          <p className="eyebrow">
            Office meetings · celebrations · private functions
          </p>
          <h2 id="catering-title">Catering made easy.</h2>
          <p>
            Daisy offers external catering for office meetings and special
            occasions, with menus planned around what you need.
          </p>
          <a
            className="button button--primary"
            href={siteHref("/catering")}
          >
            Plan your catering
          </a>
        </div>
      </section>

      <section className="trailer-feature" aria-labelledby="trailer-title">
        <div className="trailer-feature__copy">
          <p className="eyebrow">Daisy on the road</p>
          <h2 id="trailer-title">Meet Daisy.</h2>
          <p>
            The events trailer joined the family in 2025, bringing made-to-order
            sandwiches, toasties, homemade cakes and savouries to community
            events and private hire.
          </p>
          <a
            className="button button--primary"
            href={siteHref("/trailer")}
          >
            Trailer enquiries
          </a>
        </div>
        <ResponsivePicture
          baseName="daisy-trailer"
          alt="Daisy's black events trailer open for service at an outdoor event"
          width={2099}
          height={1576}
        />
      </section>

      <section
        className="reviews-section section-shell"
        aria-labelledby="reviews-title"
      >
        <div>
          <p className="eyebrow">Words from customers</p>
          <h2 id="reviews-title">Local favourites, in their words.</h2>
        </div>
        <blockquote className="review-main">
          <p>“{reviews[0]}”</p>
          <cite>Customer review published by Daisy</cite>
        </blockquote>
        <div className="review-supporting">
          {reviews.slice(1).map((review) => (
            <blockquote key={review}>
              <p>“{review}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="story-strip" aria-labelledby="story-title">
        <div className="story-strip__copy">
          <p className="eyebrow">A Godalming original</p>
          <h2 id="story-title">Family-run since 2002.</h2>
          <p>
            From the station window to office lunches and local events, Daisy
            has grown without losing the straightforward, made-here character
            people know it for.
          </p>
          <a className="text-link" href={siteHref("/about")}>
            Read our story <span aria-hidden="true">→</span>
          </a>
        </div>
        <ResponsivePicture
          baseName="shop-window"
          alt="The Daisy Sandwiches counter window at Godalming Station"
          width={2448}
          height={2448}
        />
      </section>

      <LocationBlock />
    </SiteFrame>
  );
}
