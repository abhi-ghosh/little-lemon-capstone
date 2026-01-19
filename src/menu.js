import { useState } from "react";
import { menuItems } from "./menuData";
import MenuCard from "./menuCard";

export default function Menu() {
  const [buttonActive, setButtonActive] = useState({
    entrees: true,
    mains: true,
    desserts: true,
    drinks: true,
  });
  const toggleButton = (category) => {
    setButtonActive((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  }
  const [sortOption, setSortOption] = useState("default");
  const sortedMenuItems = [...menuItems].sort((a, b) => {
    switch (sortOption) {
      case "lowToHigh":
        return a.price - b.price;
      case "highToLow":
        return b.price - a.price;
      case "caloriesLowToHigh":
        return a.calories - b.calories;
      case "caloriesHighToLow":
        return b.calories - a.calories;
      case "alphabetical":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="menu">
      <div className="title-and-filters">
        <h1>Our Delicious Menu</h1>
        <div className="sort_buttons">
          <div className="sort-container">
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="default">Default</option>
                <option value="alphabetical">Name (A-Z)</option>
                <option value="lowToHigh">Price Low to High</option>
                <option value="highToLow">Price High to Low</option>
                <option value="caloriesLowToHigh">Calories Low to High</option>
                <option value="caloriesHighToLow">Calories High to Low</option>
              </select>
          </div>
          <div className="display-buttons">
              <button className={buttonActive.entrees ? "" : "button-pressed"} onClick={() => toggleButton("entrees")}>Entrees</button>
              <button className={buttonActive.mains ? "" : "button-pressed"} onClick={() => toggleButton("mains")}>Main Course</button>
              <button className={buttonActive.desserts ? "" : "button-pressed"} onClick={() => toggleButton("desserts")}>Desserts</button>
              <button className={buttonActive.drinks ? "" : "button-pressed"} onClick={() => toggleButton("drinks")}>Drinks</button>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <h2>Entrees</h2>
        {buttonActive.entrees && <div className = "menu-item-grid">
           {(sortedMenuItems.filter(item => item.category === "entree")).map(item => (
              <MenuCard key={item.id} item={item} />
          ))}
        </div>}

        <h2>Main Course</h2>
        {buttonActive.mains && <div className = "menu-item-grid">
          {(sortedMenuItems.filter(item => item.category === "main")).map(item => (
          <MenuCard key={item.id} item={item} />
          ))}
        </div>}

        <h2>Desserts</h2>
        {buttonActive.desserts && <div className = "menu-item-grid">
          {(sortedMenuItems.filter(item => item.category === "dessert")).map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
        </div>}
        <h2>Drinks</h2>
        {buttonActive.drinks && <div className = "menu-item-grid">
          {(sortedMenuItems.filter(item => item.category === "drink")).map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
        </div>}
      </div>
    </div>
  );
}
