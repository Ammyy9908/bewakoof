import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShopIcon from "@material-ui/icons/Shop";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const brand__image = `https://images.bewakoof.com/logos/bewakoof-logo-og.png`;
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="hamburger__menu">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="brand__name_lg">
          <a href="/">
            <img src={brand__image} alt="brand__logo" />
          </a>
        </div>
        <div className="brand__name_sm">
          <a href="/">
            <img
              src="https://images.bewakoof.com/Join_TriBe_smVswHszT.png"
              alt="brand__logo"
            />
          </a>
        </div>
        <div className="nav__links">
          <a href="/" className="active__link">
            Men
          </a>
          <a href="/">Women</a>
          <a href="/">Mobile Covers</a>
        </div>
        <div className="nav__controls">
          <div className="product__searcbar">
            <SearchIcon />
            <input
              type="text"
              name="key"
              id="key"
              placeholder="Search by products,category or collection"
            />
          </div>
          <div className="control__divider"></div>
          <div className="user__actions">
            <span className="search__icon__sm">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </span>
            <span className="user__profile__btn">
              <IconButton>
                <PermIdentityOutlinedIcon />
              </IconButton>
            </span>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShopIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
