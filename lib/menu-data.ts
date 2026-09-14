export type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

export type MenuGroup = {
  id: string;
  title: string;
  intro?: string;
  items: readonly MenuItem[];
  extras?: readonly string[];
};

export const menuGroups: readonly MenuGroup[] = [
  {
    id: "sandwiches",
    title: "Sandwiches & wraps",
    intro: "Choose granary or white bread, or a wrap.",
    items: [
      { name: "Chicken, bacon, avocado & spinach", price: "£5.40" },
      { name: "Mozzarella, sun-dried tomato & rocket", price: "£5.40" },
      { name: "Ham, Brie & red onion chutney", price: "£5.40" },
      {
        name: "Spicy chorizo, cheddar, rocket & balsamic glaze",
        price: "£5.40",
      },
      { name: "Cajun chicken & mango chutney", price: "£5.40" },
      {
        name: "Falafel, tomato, red onion & spinach with mint mayo",
        price: "£5.40",
      },
      { name: "Brie, bacon & cranberry toastie", price: "£5.60" },
      { name: "Mozzarella, tomato & basil pesto toastie", price: "£5.60" },
      { name: "Tuna melt, with or without onion", price: "£5.60" },
      { name: "Cajun chicken, cheddar & jalapeño toastie", price: "£5.60" },
      {
        name: "Crispy chicken, lettuce & sweet chilli sauce toastie",
        price: "£5.60",
      },
      {
        name: "Chicken, bacon, mozzarella & BBQ sauce toastie",
        price: "£5.60",
      },
      {
        name: "Build your own sandwich or wrap",
        price: "From £5.00",
        note: "Choose from the counter filling selection.",
      },
    ],
    extras: [
      "Bacon",
      "Ham",
      "Roast chicken",
      "Sausage",
      "Cajun chicken",
      "Crispy chicken",
      "Chicken & bacon mayonnaise",
      "Spicy chorizo",
      "Tuna mayonnaise",
      "Cheddar",
      "Mozzarella",
      "Brie",
      "Halloumi",
      "Egg mayonnaise",
      "Falafel",
      "Houmous",
      "Sweet potato pakoras",
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    intro: "Hot breakfast sandwiches are available with bacon, sausage or egg.",
    items: [
      { name: "Hot breakfast sandwich — one filling", price: "£5.00" },
      { name: "Hot breakfast sandwich — two fillings", price: "£5.50" },
      { name: "Hot breakfast sandwich — three fillings", price: "£5.90" },
      { name: "Toast with jam, Marmite or marmalade", price: "£3.70" },
      { name: "Croissant or pain au chocolat", price: "£2.20" },
      { name: "Ham & cheddar croissant melt", price: "£4.20" },
      { name: "Avocado on toast", price: "£5.00" },
      { name: "Granola, fruit & yoghurt pot", price: "£4.80" },
    ],
  },
  {
    id: "salads",
    title: "Salad boxes",
    intro: "Build your own, top it with a sandwich filling and add a dressing.",
    items: [
      { name: "Build your own salad box", price: "£7.25" },
      { name: "Reuse your container", price: "£6.80" },
    ],
    extras: [
      "Lettuce",
      "Tomato",
      "Cucumber",
      "Spinach",
      "Rocket",
      "Beetroot",
      "Olives",
      "Jalapeños",
      "Sweetcorn",
      "Red onion",
      "Sweet peppers",
      "Coleslaw",
      "Dill pickles",
      "Couscous",
      "Mushrooms",
      "Sun-dried tomatoes",
      "Chickpea salad",
      "Salad of the day",
      "Crispy onions",
      "Seeds",
      "Croutons",
      "Grated carrot",
    ],
  },
  {
    id: "cakes-savouries",
    title: "Savouries & cakes",
    intro: "Daisy publishes these savouries and cakes as hand baked.",
    items: [
      {
        name: "Vegetable samosas",
        price: "£3.00",
        note: "Published as vegan friendly.",
      },
      { name: "Cheddar, pesto & tomato turnovers", price: "£3.00" },
      { name: "Bacon, cheddar & tomato turnovers", price: "£3.00" },
      { name: "Sausage rolls", price: "£3.00" },
      { name: "Chocolate brownies", price: "£3.00" },
      { name: "All-butter shortbread", price: "£3.00" },
      { name: "Caramel crunch", price: "£3.00" },
      { name: "Rocky road", price: "£3.00" },
      { name: "Rock cakes", price: "£3.00" },
      { name: "Granola slice", price: "£3.00" },
      { name: "All-butter flapjack", price: "£3.00" },
      {
        name: "Banana & raisin flapjack",
        price: "£3.00",
        note: "Published as vegan friendly.",
      },
      {
        name: "Ginger & raisin tiffin",
        price: "£3.00",
        note: "Published as vegan friendly.",
      },
      { name: "Peanut butter & chocolate chip cookies", price: "£2.75" },
    ],
  },
  {
    id: "drinks",
    title: "Coffee & drinks",
    intro:
      "Some hot drinks are available in several sizes; the current published price range is shown.",
    items: [
      { name: "Colombian fresh filter coffee", price: "£2.80–£3.80" },
      { name: "Americano, cappuccino or caffè latte", price: "£3.20–£4.00" },
      { name: "Flat white", price: "£3.60" },
      { name: "Macchiato or cortado", price: "£2.80–£3.20" },
      { name: "Tea, herbal tea, fruit tea or decaf tea", price: "£2.20–£3.00" },
      { name: "Hot chocolate or chai latte", price: "£3.40–£4.20" },
      { name: "Mocha or dirty chai latte", price: "£3.60–£4.40" },
      { name: "Espresso", price: "£2.40–£2.80" },
      { name: "Flavoured syrup", price: "40p" },
      { name: "Cold drink cans", price: "From £1.50" },
      { name: "Cold drink bottles", price: "From £2.50" },
      { name: "Still or sparkling water", price: "£1.50" },
    ],
    extras: ["Decaf and dairy-free alternatives are published as available."],
  },
] as const;

export const menuCategoryLinks = menuGroups.map(({ id, title }) => ({
  id,
  title,
}));
