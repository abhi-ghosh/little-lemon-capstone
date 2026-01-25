import { useState, useEffect, use } from "react";
import { useOutletContext, useNavigate } from "react-router";
import { menuItems } from "./menuData";
import MenuCard from "./menuCard";
import shopping_cart from "./assets/cart.svg";

export default function Menu() {
  const nav = useNavigate();
  // Stick the Sort and Filter buttons on top of the Footer when Footer is visibile on mobile
  const {footerRef,cart,cartCount,cartPrice, setCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity} = useOutletContext();
  const cartData = {
    cart,
    cartCount,
    cartPrice,
    addToCart,
    setCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
  if (!footerRef?.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setFooterVisible(entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(footerRef.current);

  return () => observer.disconnect();
}, []);

  const [buttonActive, setButtonActive] = useState({
    entrees: true,
    mains: true,
    desserts: true,
    drinks: true,
  });
  const [showSortSheet, setShowSortSheet] = useState(false);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const toggleButton = (category) => {
    setButtonActive((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };
  // Sort Option shows on button for mobile resolution
  const getSortLabel = (sortOption) => {
    switch (sortOption) {
      case "lowToHigh":
        return "Price ☝️";
      case "highToLow":
        return "Price 👇";
      case "caloriesLowToHigh":
        return "Calories ☝️";
      case "caloriesHighToLow":
        return "Calories 👇";
      case "alphabetical":
        return "A–Z";
      default:
        return "Default";
    }
  };
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
  // Prevents user from scrolling while modal is open
  useEffect(() => {
    if (showSortSheet || showFilterSheet) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSortSheet, showFilterSheet]);


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
      {/* Sort Sheet for mobile */}
      {showSortSheet && (
        <div className='sheet'>
          <h2>Sort by</h2>
          <label>
            <input type="radio" value="default" checked={sortOption === "default"} onChange={(e) => setSortOption(e.target.value)} />
            Default
          </label>
          <label>
            <input type="radio" value="alphabetical" checked={sortOption === "alphabetical"} onChange={(e) => setSortOption(e.target.value)} />
            Name (A-Z)
          </label>
          <label>
            <input type="radio" value="lowToHigh" checked={sortOption === "lowToHigh"} onChange={(e) => setSortOption(e.target.value)} />
            Price Low to High
          </label>
          <label>
            <input type="radio" value="highToLow" checked={sortOption === "highToLow"} onChange={(e) => setSortOption(e.target.value)} />
            Price High to Low
          </label>
          <label>
            <input type="radio" value="caloriesLowToHigh" checked={sortOption === "caloriesLowToHigh"} onChange={(e) => setSortOption(e.target.value)} />
            Calories Low to High
          </label>
          <label>
            <input type="radio" value="caloriesHighToLow" checked={sortOption === "caloriesHighToLow"} onChange={(e) => setSortOption(e.target.value)} />
            Calories High to Low
          </label>
          <button onClick={() => setShowSortSheet(false)}>OK 👍</button>
        </div>
      )}
      {/*Blur for backdrop when sort menu is open on moblie*/}
      {(showFilterSheet || showSortSheet) && (
      <div
        className="backdrop"
        onClick={() => {
          setShowFilterSheet(false);
          setShowSortSheet(false);
        }}
      />
      )}
      {/* Filter Sheet for mobile */}
      {showFilterSheet && (
        <div className='sheet'>
          <h2>Filter Categories</h2>
          <label>
            <input type="checkbox" checked={buttonActive.entrees} onChange={() => toggleButton("entrees")} />
            Entrees
          </label>
          <label>
            <input type="checkbox" checked={buttonActive.mains} onChange={() => toggleButton("mains")} />
            Main Course
          </label>
          <label>
            <input type="checkbox" checked={buttonActive.desserts} onChange={() => toggleButton("desserts")} />
            Desserts
          </label>
          <label>
            <input type="checkbox" checked={buttonActive.drinks} onChange={() => toggleButton("drinks")} />
            Drinks
          </label>
          <button onClick={() => setShowFilterSheet(false)}>OK 👍</button>
        </div>
      )}
      <div className="menu-container">
        <h2>Entrees</h2>
        {buttonActive.entrees && <div className = "menu-item-grid">
           {(sortedMenuItems.filter(item => item.category === "entree")).map(item => (
              <MenuCard key={item.id} item={item} cartData={cartData} />
          ))}
        </div>}

        <h2>Main Course</h2>
        {buttonActive.mains && <div className = "menu-item-grid">
          {(sortedMenuItems.filter(item => item.category === "main")).map(item => (
          <MenuCard key={item.id} item={item} cartData={cartData} />
          ))}
        </div>}

        <h2>Desserts</h2>
        {buttonActive.desserts && <div className = "menu-item-grid">
          {(sortedMenuItems.filter(item => item.category === "dessert")).map(item => (
          <MenuCard key={item.id} item={item} cartData={cartData} />
        ))}
        </div>}
        <h2>Drinks</h2>
        {buttonActive.drinks && <div className = "menu-item-grid">
          {(sortedMenuItems.filter(item => item.category === "drink")).map(item => (
          <MenuCard key={item.id} item={item} cartData={cartData} />
        ))}
        </div>}
      </div>
      {/* Mobile bottom bar */}
       <div className= {`mobile-bottom-bar ${footerVisible ? "static" : "fixed"}`}>
        <button onClick={() => setShowSortSheet(prev => !prev)}>Sort - {getSortLabel(sortOption)}</button>
        <button onClick={() => setShowFilterSheet(prev => !prev)}>Filter</button>
       </div>
        <div>
          {cartData.cart.length > 0 && (<button className={`shopping-cart ${cartData.cart.length > 0 ? "show" : ""}`} onClick={() => nav("/orderOnline") && window.scrollTo(0, 0)}><img src={shopping_cart} alt="shopping cart" /> <p>{cartData.cartCount}</p></button>)}
       </div>
    </div>
  );
}
