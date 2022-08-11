import React, { useEffect, useState } from "react";
import "../css/Footer.css";
import { Button } from "@mui/material";
function Footer() {
  let categories = [
    { category: "Animation", categoryURL: "/categories/animation" },
    { category: "Architecutre", categoryURL: "/categories/architecutre" },
    { category: "Graphic Design", categoryURL: "/categories/grphic-design" },
    { category: "Illustration", categoryURL: "/categories/illustration" },
    {
      category: "Interactive Design",
      categoryURL: "/categories/interactive-design",
    },
    { category: "Miscellaneous", categoryURL: "/categories/miscellaneous" },
    { category: "Photography", categoryURL: "/categories/photography" },
    { category: "Product Design", categoryURL: "/categories/product-design" },
  ];

  const [width, setWidth] = useState(0);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    setWidth(windowWidth);
  }, []);

  return (
    <div className="footer">
      <div className="container-footer">
        <div className="container-foot">
          <div className="top-section">
            <div className="logo">BLOGLAND</div>
            <div className="small-text">
              © 2018 Blogland™, all rights reserved
            </div>
          </div>
        </div>
        <div className="seperator-footer"></div>
        <div className="container">
          <div className="bottom1">
            <div className="footer-categories">
              <p>CATEGORIES</p>
              {width > 487 ? (
                <div className="footer-links-container">
                  {categories.map((category) => {
                    return (
                      <a href={category.categoryURL}>{category.category}</a>
                    );
                  })}
                </div>
              ) : (
                <div className="select-container">
                  <select placeholder="category">
                    <option value="" disabled selected>
                      Category
                    </option>
                    {categories.map((category) => {
                      return (
                        <option value={category.category}>
                          {category.category}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
            </div>
            <div className="footer-newsletter">
              <div className="title-text">SUBSCRIBE TO NEWSLETTER</div>
              <div className="form-block">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
                <Button
                  variant="contained"
                  color="black"
                  sx={{ color: "white", fontWeight: 600 }}
                >
                  SEND
                </Button>
              </div>
            </div>
          </div>
          <div className="bottom2">
            <div className="footer-links-container">
              <div className="footer-links">
                <div className="title-text">INFORMATION</div>
                <div className="footer-links-inner">
                  <a href="http://">about</a>
                  <a href="http://">contact</a>
                  <a href="http://">terms</a>
                </div>
              </div>
              <div className="footer-links">
                <div className="title-text">FOLLOW US</div>
                <div className="footer-links-inner">
                  <a href="http://">instagram</a>
                  <a href="http://">facebook</a>
                  <a href="http://">twitter</a>
                </div>
              </div>
              <div className="footer-links">
                <div className="title-text">TEMPLATE</div>
                <div className="footer-links-inner">
                  <a href="http://">Image License Info</a>
                  <a href="http://">Powered by Webflow</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
