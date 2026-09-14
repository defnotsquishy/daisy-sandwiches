import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/site-frame";
import { ResponsivePicture } from "@/components/site/responsive-picture";
import { menuCategoryLinks, menuGroups } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "See the current Daisy Sandwiches menu for sandwiches, wraps, breakfast, salad boxes, cakes, savouries, coffee and drinks in Godalming.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <SiteFrame>
      <header className="page-intro page-intro--menu">
        <div>
          <p className="eyebrow">The counter menu</p>
          <h1>What are you having?</h1>
          <p>
            Made-to-order sandwiches and wraps, breakfast, build-your-own salad
            boxes, homemade cakes, savouries and drinks.
          </p>
        </div>
        <ResponsivePicture
          baseName="salad-ingredients"
          alt="Fresh salad ingredients arranged on Daisy's counter"
          width={2990}
          height={2247}
          eager
        />
      </header>

      <nav className="menu-jump section-shell" aria-label="Menu categories">
        <p>Jump to</p>
        {menuCategoryLinks.map((category) => (
          <a key={category.id} href={`#${category.id}`}>
            {category.title}
          </a>
        ))}
      </nav>

      <div className="menu-ledger section-shell">
        {menuGroups.map((group) => (
          <section
            className="menu-group"
            id={group.id}
            key={group.id}
            aria-labelledby={`${group.id}-title`}
          >
            <header>
              <h2 id={`${group.id}-title`}>{group.title}</h2>
              {group.intro ? <p>{group.intro}</p> : null}
            </header>
            <ul className="menu-list">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div>
                    <span>{item.name}</span>
                    {item.note ? <small>{item.note}</small> : null}
                  </div>
                  {item.price ? <strong>{item.price}</strong> : null}
                </li>
              ))}
            </ul>
            {group.extras ? (
              <div className="menu-extras">
                <p>
                  {group.id === "sandwiches"
                    ? "Build-your-own fillings"
                    : group.id === "salads"
                      ? "Counter selection"
                      : "Also available"}
                </p>
                <ul>
                  {group.extras.map((extra) => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <section className="menu-note section-shell">
        <h2>Before you order</h2>
        <p>
          Availability and prices can change. Please contact Daisy to confirm
          current items, ingredients and allergen information. Dietary labels
          are shown only where Daisy’s published menu states them.
        </p>
        <a className="button button--primary" href="tel:+447786616221">
          Call to order or check
        </a>
      </section>
    </SiteFrame>
  );
}
