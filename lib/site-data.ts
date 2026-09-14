export const business = {
  name: "Daisy Sandwiches",
  established: 2002,
  phoneDisplay: "07786 616221",
  phoneHref: "+447786616221",
  email: "daisysandwiches.godalming@gmail.com",
  trailerEmail: "daisytrailerevents@gmail.com",
  address: {
    lines: [
      "Daisy Sandwiches",
      "Godalming Station",
      "Godalming, Surrey",
      "GU7 1EU",
    ],
    singleLine:
      "Daisy Sandwiches, Godalming Station, Godalming, Surrey GU7 1EU",
  },
  hours: [
    {
      label: "Monday–Friday",
      shortLabel: "Mon–Fri",
      opens: "06:00",
      closes: "16:30",
      days: [1, 2, 3, 4, 5],
    },
    {
      label: "Saturday",
      shortLabel: "Sat",
      opens: "07:00",
      closes: "14:30",
      days: [6],
    },
    {
      label: "Sunday",
      shortLabel: "Sun",
      opens: "08:00",
      closes: "14:30",
      days: [0],
    },
  ],
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Daisy+Sandwiches%2C+Godalming+Station%2C+Godalming%2C+Surrey%2C+GU7+1EU",
} as const;

export const mainNavigation = [
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/trailer", label: "The Trailer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const reviews = [
  "Just wanted to say a huge thank you for the catering you did for our meetings. The food was delicious, everyone commented on it. The cakes were out of this world too.",
  "Huge thanks for today's delicious sandwiches. These must be the best sandwiches in Godalming.",
  "I travel from Godalming even though I live closer to Farncombe, the coffee is spot on and the sandwiches are truly amazing.",
] as const;

export const foodCategories = [
  {
    name: "Sandwiches",
    copy: "Made to order on bread or as wraps, with classics, toasties and build-your-own fillings.",
  },
  {
    name: "Breakfast",
    copy: "Hot breakfast sandwiches, toast, pastries and a granola, fruit and yoghurt pot.",
  },
  {
    name: "Salad boxes",
    copy: "Build your own from the counter selection, then add a sandwich filling and dressing.",
  },
  {
    name: "Cakes & savouries",
    copy: "Hand-baked cakes alongside sausage rolls, samosas and savoury turnovers.",
  },
  {
    name: "Coffee & drinks",
    copy: "Fresh filter coffee, espresso drinks, tea, hot chocolate and chilled drinks.",
  },
] as const;

export const sourceNote =
  "Menu items, prices, contact details and regular opening hours are based on Daisy's currently published information and should be confirmed by the business before replacing the live site.";
