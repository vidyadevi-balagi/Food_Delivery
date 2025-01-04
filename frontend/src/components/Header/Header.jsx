import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Hello!! welcome to Vidya's store</h1>
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. our
          mission is to satisfy your cravings and elevate your dinining
          experience. one delicious meal at a time.{" "}
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
