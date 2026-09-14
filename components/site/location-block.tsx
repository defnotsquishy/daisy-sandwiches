import { business } from "@/lib/site-data";

export function LocationBlock() {
  return (
    <section className="location-section" aria-labelledby="location-title">
      <div className="location-section__lead">
        <p className="eyebrow">Find us</p>
        <h2 id="location-title">Right inside Godalming Station.</h2>
        <address>
          {business.address.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        <div className="button-row">
          <a className="button button--primary" href={business.directionsUrl}>
            Get directions
          </a>
          <a
            className="button button--secondary"
            href={`tel:${business.phoneHref}`}
          >
            Call the shop
          </a>
        </div>
      </div>
      <div className="hours-board">
        <p className="hours-board__label">Regular opening hours</p>
        <dl>
          {business.hours.map((entry) => (
            <div key={entry.label}>
              <dt>{entry.label}</dt>
              <dd>
                {entry.opens}–{entry.closes}
              </dd>
            </div>
          ))}
        </dl>
        <p>Hours can change. Daisy publishes updates on its Google page.</p>
      </div>
    </section>
  );
}
