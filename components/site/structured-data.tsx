import { business } from "@/lib/site-data";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["CafeOrCoffeeShop", "LocalBusiness"],
    name: business.name,
    url: "https://daisy-sandwiches-godalming.nathanyu2010.chatgpt.site",
    telephone: business.phoneHref,
    email: business.email,
    foundingDate: String(business.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Godalming Station",
      addressLocality: "Godalming",
      addressRegion: "Surrey",
      postalCode: "GU7 1EU",
      addressCountry: "GB",
    },
    openingHoursSpecification: business.hours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days.map(
        (day) =>
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][day],
      ),
      opens: entry.opens,
      closes: entry.closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
