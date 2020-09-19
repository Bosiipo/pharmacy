import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <p className="header-logo">Pharma</p>
      </Link>

      <div className="header-search">
        <input
          name="search"
          type="text"
          placeholder="search"
          className="header-searchInput"
        />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest </span>
          <span className="header-optionLineTwo">Sign In </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns </span>
          <span className="header-optionLineTwo">& orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your </span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <Link to="/checkout">
            <ShoppingCartIcon />
          </Link>
          <span className="header-optionLineTwo header-basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
