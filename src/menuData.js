import affogato from "./assets/affogato.jpg";
import baklava from "./assets/baklava.jpeg";
import bruschetta from "./assets/bruschetta.png";
import caprese from "./assets/caprese.jpeg";
import cake from "./assets/cake.jpeg";
import calamari from "./assets/calamari.jpg";
import grape from "./assets/grape.webp";
import grillfish from "./assets/grillfish.jpg";
import hummus from "./assets/hummus.jpeg";
import ice from "./assets/ice.jpeg";
import lamb from "./assets/lamb.jpeg";
import lemon from "./assets/lemon-dessert.jpg";
import moussaka from "./assets/mousaka.jpeg";
import panna from "./assets/panna.jpeg";
import pasta from "./assets/pasta.jpeg";
import risotto from "./assets/seafood.jpeg";
import souvlaki from "./assets/souv.jpg";
import salad from "./assets/greek-salad.jpg";
import sparkling from "./assets/sparkling.webp";
import espresso from "./assets/espresso.jpeg";
import cappuccino from "./assets/cappuccino.jpeg";
import icedTea from "./assets/icedTea.jpeg";
import orangeJuice from "./assets/orangeJuice.jpeg";
import lemonade from "./assets/lemonade.jpeg";

export const menuItems = [
  // 🥗 ENTREES
  {
    id: "entree-1",
    name: "Greek Salad",
    description: "Fresh tomatoes, cucumbers, olives, and feta cheese.",
    category: "entree",
    price: 8.99,
    calories: 220,
    image: salad,
  },
  {
    id: "entree-2",
    name: "Bruschetta",
    description: "Grilled bread topped with tomato, garlic, and basil.",
    category: "entree",
    price: 6.99,
    calories: 180,
    image: bruschetta,
  },
  {
    id: "entree-3",
    name: "Hummus Plate",
    description: "Creamy hummus served with warm pita bread.",
    category: "entree",
    price: 7.49,
    calories: 260,
    image: hummus,
  },
  {
    id: "entree-4",
    name: "Stuffed Grape Leaves",
    description: "Rice-stuffed grape leaves with herbs and lemon.",
    category: "entree",
    price: 7.99,
    calories: 240,
    image: grape,
  },
  {
    id: "entree-5",
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil drizzle.",
    category: "entree",
    price: 8.49,
    calories: 210,
    image: caprese
  },
  {
  id: "entree-6",
  name: "Fried Calamari",
  description: "Lightly battered calamari served with lemon aioli.",
  category: "entree",
  price: 9.49,
  calories: 310,
  image: calamari,
  },


  // 🍽️ MAINS
  {
    id: "main-1",
    name: "Grilled Fish",
    description: "Seasonal catch grilled with lemon and herbs.",
    category: "main",
    price: 18.99,
    calories: 540,
    image: grillfish,
  },
  {
    id: "main-2",
    name: "Chicken Souvlaki",
    description: "Marinated chicken skewers with tzatziki.",
    category: "main",
    price: 16.49,
    calories: 620,
    image: souvlaki,
  },
  {
    id: "main-3",
    name: "Pasta Primavera",
    description: "Seasonal vegetables tossed in light garlic sauce.",
    category: "main",
    price: 15.99,
    calories: 680,
    image: pasta,
  },
  {
    id: "main-4",
    name: "Lamb Chops",
    description: "Grilled lamb chops with rosemary and olive oil.",
    category: "main",
    price: 22.99,
    calories: 750,
    image: lamb,
  },
  {
    id: "main-5",
    name: "Vegetarian Moussaka",
    description: "Layers of eggplant, potato, and creamy béchamel.",
    category: "main",
    price: 17.49,
    calories: 700,
    image: moussaka,
  },
  {
  id: "main-6",
  name: "Seafood Risotto",
  description: "Creamy risotto with shrimp, mussels, and herbs.",
  category: "main",
  price: 19.49,
  calories: 720,
  image: risotto,
  },

  // 🍰 DESSERTS
  {
    id: "dessert-1",
    name: "Lemon Dessert",
    description: "House-made lemon cake with citrus glaze.",
    category: "dessert",
    price: 6.49,
    calories: 410,
    image: lemon,
  },
  {
    id: "dessert-2",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with dark chocolate frosting.",
    category: "dessert",
    price: 6.99,
    calories: 520,
    image: cake,
  },
  {
    id: "dessert-3",
    name: "Baklava",
    description: "Layers of filo pastry, nuts, and honey syrup.",
    category: "dessert",
    price: 5.99,
    calories: 450,
    image: baklava,
  },
  {
    id: "dessert-4",
    name: "Panna Cotta",
    description: "Creamy vanilla dessert with berry coulis.",
    category: "dessert",
    price: 6.79,
    calories: 390,
    image: panna,
  },
  {
    id: "dessert-5",
    name: "Ice Cream Trio",
    description: "Three scoops of assorted house-made ice creams.",
    category: "dessert",
    price: 5.49,
    calories: 480,
    image: ice,
  },
  {
  id: "dessert-6",
  name: "Affogato",
  description: "Vanilla ice cream topped with hot espresso.",
  category: "dessert",
  price: 5.99,
  calories: 360,
  image: affogato,
  },

  // 🍹 DRINKS
  {
    id: "drink-1",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh lemons and mint.",
    category: "drink",
    price: 3.99,
    calories: 120,
    image: lemonade, // import when ready
  },
  {
    id: "drink-2",
    name: "Iced Tea",
    description: "Chilled black tea lightly sweetened with lemon.",
    category: "drink",
    price: 3.49,
    calories: 90,
    image: icedTea,
  },
  {
    id: "drink-3",
    name: "Sparkling Water",
    description: "Refreshing sparkling mineral water.",
    category: "drink",
    price: 2.99,
    calories: 0,
    image: sparkling,
  },
  {
    id: "drink-4",
    name: "Espresso",
    description: "Rich single-shot espresso made from premium beans.",
    category: "drink",
    price: 2.49,
    calories: 5,
    image: espresso,
  },
  {
    id: "drink-5",
    name: "Cappuccino",
    description: "Espresso with steamed milk and velvety foam.",
    category: "drink",
    price: 4.49,
    calories: 140,
    image: cappuccino,
  },
  {
    id: "drink-6",
    name: "Orange Juice",
    description: "Freshly squeezed orange juice.",
    category: "drink",
    price: 3.99,
    calories: 160,
    image: orangeJuice,
  }
];
