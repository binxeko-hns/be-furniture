import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import MenuMobileDrawer from "./MenuMobileDrawer";
import { Dialog, SwipeableDrawer } from "@mui/material";

type PropsType = {
  cartCount?: number;
  page?: string;
  onOpenCartDrawer?: Function;
};
const Header = ({ cartCount = 0, page, onOpenCartDrawer }: PropsType) => {
  const navigate = useNavigate();
  const [isScoll, setIsScroll] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState<boolean>(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);
  const [isOpenCategoriesDrawer, setIsOpenCategoriesDrawer] =
    useState<boolean>(false);

  const handleOpenCloseSearchBar = () => {
    setIsOpenSearchBar(!isOpenSearchBar);
  };

  const handleOpenCloseCategoriesDrawer = () => {
    setIsOpenCategoriesDrawer(!isOpenCategoriesDrawer);
  };

  const SearchDialog = () => {
    return (
      <Dialog open={isOpenSearchBar} onClose={handleOpenCloseSearchBar}>
        <div className="search-dialog">
          <div className="search-dialog-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="close-icon">
              <span className="icon" onClick={handleOpenCloseSearchBar}>
                X
              </span>
            </span>
            <input type="text" name="" id="" placeholder="Enter your search" />
          </div>
        </div>
      </Dialog>
    );
  };

  const CategoriesDrawer = () => {
    return (
      <SwipeableDrawer
        anchor="left"
        open={isOpenCategoriesDrawer}
        onClose={handleOpenCloseCategoriesDrawer}
        onOpen={handleOpenCloseCategoriesDrawer}
      >
        <div className="categories-drawer">
          <div className="categories-drawer-wrapper">
            <span className="close-icon">
              <i className="fa-solid fa-xmark" onClick={handleOpenCloseCategoriesDrawer}></i>
            </span>
            <ul className="main-menu-mobile-drawer">
              <li className="main-menu-mobile-item">
                <span className="main-menu-mobile-item-label">
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon1.svg"
                    alt=""
                  />
                  Chairs
                </span>
              </li>
              <li className="main-menu-mobile-item">
                <span className="main-menu-mobile-item-label">
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon2.svg"
                    alt=""
                  />
                  Beds
                </span>
              </li>
              <li className="main-menu-mobile-item">
                <span className="main-menu-mobile-item-label">
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon7.svg"
                    alt=""
                  />
                  Lamps
                </span>
              </li>
              <li className="main-menu-mobile-item">
                <span className="main-menu-mobile-item-label">
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon3.svg"
                    alt=""
                  />
                  Tables
                </span>
              </li>
              <li className="main-menu-mobile-item">
                <span className="main-menu-mobile-item-label">
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon4.svg"
                    alt=""
                  />
                  Armchairs
                </span>
              </li>
              <li className="main-menu-mobile-item">
                <span className="main-menu-mobile-item-label">
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon6.svg"
                    alt=""
                  />
                  Cabinets
                </span>
              </li>
              <li className="main-menu-mobile-item">
                <span
                  className="main-menu-mobile-item-label"
                  onClick={() => navigate("/sofas")}
                >
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon5.svg"
                    alt=""
                  />
                  Sofas
                </span>
              </li>
              <li className="main-menu-mobile-item">
                <span
                  className="main-menu-mobile-item-label"
                  onClick={() => navigate("/sofas")}
                  style={{ color: "#EE6352" }}
                >
                  <img
                    src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon8.svg"
                    alt=""
                  />
                  Sale
                </span>
              </li>
            </ul>
          </div>
        </div>
      </SwipeableDrawer>
    );
  };

  const handleOpenCloseMenuDrawer = () => {
    setIsOpenMenuDrawer(!isOpenMenuDrawer);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (220 > currentScrollPos) {
      setIsScroll(false);
      setScrollY(-currentScrollPos);
    } else {
      setIsScroll(true);
      setScrollY(-40);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MenuMobileDrawer
        open={isOpenMenuDrawer}
        page={page}
        onClose={handleOpenCloseMenuDrawer}
        onOpen={handleOpenCloseMenuDrawer}
      />

      <div
        className={`header ${isScoll ? "is-sticky" : ""}`}
        style={{ top: scrollY }}
      >
        <div className="banner">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="greeting">Welcome to Our Store</div>
            <div className="services">
              <i className="fa-solid fa-plane ms-3"></i>
              <span>Free delivary over $200</span>
              <i className="fa-solid fa-circle-dollar ms-3"></i>
              <span>Money back guarantee</span>
              <i className="fa-solid fa-tag ms-3"></i>
              <span>Weekly new arrivals</span>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="section-wrapper">
              <div className="logo-wrapper">
                <img
                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2.svg"
                  alt=""
                  onClick={() => navigate("/")}
                />
              </div>
              <div className="search-bar">
                <div className="search-bar-wrapper">
                  <i className="fa fa-search"></i>
                  <input type="text" placeholder="Search" />
                </div>
              </div>
              <div className="services">
                <div className="wrap-inner">
                  <div className="header-icon search-icon">
                    <a onClick={handleOpenCloseSearchBar}>
                      <div className="icon-wrapper">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                    </a>
                    <SearchDialog />
                  </div>
                  <div className="header-icon">
                    <a>
                      <div className="icon-wrapper">
                        <i className="fa-solid fa-heart"></i>
                        <span className="wishlist-count">0</span>
                      </div>
                    </a>
                  </div>
                  <div className="header-icon">
                    <a onClick={() => onOpenCartDrawer?.()}>
                      <div className="icon-wrapper">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="wishlist-count">{cartCount}</span>
                      </div>
                    </a>
                  </div>
                  <div className="header-icon">
                    <a>
                      <div className="icon-wrapper">
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section box-shadow-bottom">
          <div className="container">
            <div className="section-wrapper">
              <div className="logo-wrapper">
                <div className="browse-categories">
                  <div className="browse-inner-wrapper">
                    <ul className="menu-categories">
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          style={{ backgroundColor: "#433779", color: "#fff" }}
                        >
                          <span className="menu-icon">
                            <i className="fa-solid fa-bars"></i>
                          </span>
                          <span className="label-wrapper">
                            <span className="menu-label">
                              Browse Categories
                            </span>
                          </span>
                          <span className="menu-subicon ms-3">
                            <i className="fa-solid fa-chevron-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-subitem">
                            <a className="menu-link menu-sublink">
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon1.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span className="menu-label">Chairs</span>
                              </span>
                              <span className="menu-subicon">
                                <i className="fa-solid fa-chevron-right"></i>
                              </span>
                            </a>
                            <div className="megamenu">
                              <div className="megamenu-wrapper">
                                <div className="magemenu-wrapper-inner">
                                  <div className="megamenu-wrapper-inner-item">
                                    <div className="item-wrapper-inner">
                                      <div className="image-wrapper">
                                        <img
                                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic1.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="item-wrapper">
                                        <ul>
                                          <li>
                                            <span>
                                              <b>FABRIC CHAIRS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Wing chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Rocking chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Kitchen tables parts</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="megamenu-wrapper-inner-item">
                                    <div
                                      className="item-wrapper-inner"
                                      style={{
                                        paddingLeft: "10%",
                                        paddingRight: "0",
                                      }}
                                    >
                                      <div className="image-wrapper">
                                        <img
                                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic2.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="item-wrapper">
                                        <ul>
                                          <li>
                                            <span>
                                              <b>HIGH-BACK CHAIRS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Recliners</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Armchairs with footstool</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Ratan armchairs</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="megamenu-wrapper-inner-item">
                                    <div
                                      className="item-wrapper-inner"
                                      style={{
                                        paddingLeft: "10%",
                                        paddingRight: "0",
                                        border: "none",
                                      }}
                                    >
                                      <div className="image-wrapper">
                                        <img
                                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic3.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="item-wrapper">
                                        <ul>
                                          <li>
                                            <span>
                                              <b>KIDS CHAIRS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Wing chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Rocking chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Kids armchairs parts</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="megamenu-wrapper-inner-item"
                                    style={{ width: "100%" }}
                                  >
                                    <div
                                      className="item-wrapper-inner"
                                      style={{
                                        paddingTop: "20px",
                                        paddingRight: "0",
                                        border: "none",
                                      }}
                                    >
                                      <ul className="clients">
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic4.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic3.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic1.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic2.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic5.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-subitem">
                            <a className="menu-link menu-sublink">
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon2.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span className="menu-label">Beds</span>
                              </span>
                              <span className="menu-subicon">
                                <i className="fa-solid fa-chevron-right"></i>
                              </span>
                            </a>
                            <div className="megamenu">
                              <div className="megamenu-wrapper-2">
                                <div className="megamenu-wrapper-2-inner">
                                  <div className="megamenu-wrapper-2-inner-item">
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon2.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>BEDS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Single beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Double beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Beds parts</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon2.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>SOFA BEDS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Chair beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Corner sofa beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Sofa beds parts</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon2.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>GUEST BEDS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Day beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Stackable beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Beds with drawers</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon2.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>KIDS BEDS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Chair beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Toddler beds</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Loft drawers</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="megamenu-wrapper-2-inner-image">
                                  <div className="megamenu-wrapper-2-inner-image-wrapper">
                                    <img
                                      src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-categories-pic1.webp"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-subitem">
                            <a className="menu-link menu-sublink">
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon7.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span className="menu-label">Lamps</span>
                              </span>
                              <span className="menu-subicon">
                                <i className="fa-solid fa-chevron-right"></i>
                              </span>
                            </a>
                            <div className="megamenu">
                              <div className="megamenu-wrapper-2">
                                <div className="megamenu-wrapper-2-inner">
                                  <div className="megamenu-wrapper-2-inner-item">
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon7.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>CEILING LIGHTS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Pendants</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Ceiling spotlights</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Chandeliers</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon7.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>SPOTLIGHTS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Ceiling spotlights</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Wall spotlights</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Track lighting</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon7.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>FLOOR LAMPS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>LED lamps</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Uplighter</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Reading lamps</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="item-menulist-wrapper">
                                      <div className="item-menulist-wrapper-inner">
                                        <ul>
                                          <li>
                                            <span className="icon">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon7.svg"
                                                alt=""
                                              />
                                            </span>
                                            <span className="desc">
                                              <b>DESK LAMPS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Work lamps</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Kids lamps</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span className="desc">
                                              <a>Clamp lights</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="megamenu-wrapper-2-inner-image">
                                  <div className="megamenu-product-wrapper">
                                    <div className="megamenu-product-wrapper-item">
                                      <div className="megamenu-product-wrapper-item-inner">
                                        <a>
                                          <div className="content">
                                            <div className="icon-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic7.webp"
                                                alt=""
                                              />
                                            </div>
                                            <div className="desc-wrapper">
                                              <h5 className="title">
                                                Metal hanging lamps
                                              </h5>
                                              <div className="desc">
                                                <del>
                                                  <span>
                                                    <bdi>$122.00</bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span>
                                                    <bdi>$105.00</bdi>
                                                  </span>
                                                </ins>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="megamenu-product-wrapper-item">
                                      <div className="megamenu-product-wrapper-item-inner">
                                        <a>
                                          <div className="content">
                                            <div className="icon-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic8.webp"
                                                alt=""
                                              />
                                            </div>
                                            <div className="desc-wrapper">
                                              <h5 className="title">
                                                Desk lamps
                                              </h5>
                                              <div className="desc">
                                                <span>
                                                  <bdi>$105.00</bdi>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="megamenu-product-wrapper-item">
                                      <div className="megamenu-product-wrapper-item-inner">
                                        <a>
                                          <div className="content">
                                            <div className="icon-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic9.webp"
                                                alt=""
                                              />
                                            </div>
                                            <div className="desc-wrapper">
                                              <h5 className="title">
                                                Living room lamp
                                              </h5>
                                              <div className="desc">
                                                <del>
                                                  <span>
                                                    <bdi>$599.00</bdi>
                                                  </span>
                                                </del>
                                                <ins>
                                                  <span>
                                                    <bdi>$450.00</bdi>
                                                  </span>
                                                </ins>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-subitem">
                            <a className="menu-link menu-sublink">
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon3.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span className="menu-label">Tables</span>
                              </span>
                              <span className="menu-subicon">
                                <i className="fa-solid fa-chevron-right"></i>
                              </span>
                            </a>
                            <div className="megamenu">
                              <div className="megamenu-wrapper-3">
                                <div className="megamenu-wrapper-3-inner">
                                  <div className="megamenu-wrapper-3-inner-item">
                                    <div className="megamenu-wrapper-3-inner-item-inner">
                                      <ul>
                                        <li>
                                          <span className="desc">
                                            <b>KITCHEN TABLE</b>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Dining tables</a>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Dining tables sets</a>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Kitchen table parts</a>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="megamenu-wrapper-3-inner-item">
                                    <div className="megamenu-wrapper-3-inner-item-inner">
                                      <ul>
                                        <li>
                                          <span className="desc">
                                            <b>COFFE TABLE</b>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Side tables</a>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Console tables</a>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Nesting tables</a>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div
                                    className="megamenu-wrapper-3-inner-item"
                                    style={{ width: "50%" }}
                                  >
                                    <div className="megamenu-wrapper-3-inner-item-inner">
                                      <ul>
                                        <li>
                                          <span className="desc">
                                            <b>COMPUTER DESKS</b>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Standing desks</a>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Home desk</a>
                                          </span>
                                        </li>
                                        <li>
                                          <span className="desc">
                                            <a>Office desks</a>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-subitem">
                            <a className="menu-link menu-sublink">
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon4.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span className="menu-label">Armchairs</span>
                              </span>
                              <span className="menu-subicon">
                                <i className="fa-solid fa-chevron-right"></i>
                              </span>
                            </a>
                            <div className="megamenu">
                              <div className="megamenu-wrapper">
                                <div className="magemenu-wrapper-inner">
                                  <div className="megamenu-wrapper-inner-item">
                                    <div className="item-wrapper-inner">
                                      <div className="image-wrapper">
                                        <img
                                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic13.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="item-wrapper">
                                        <ul>
                                          <li>
                                            <span>
                                              <b>FABRIC ARMCHAIRS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Wing chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Rocking chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Kitchen tables parts</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="megamenu-wrapper-inner-item">
                                    <div
                                      className="item-wrapper-inner"
                                      style={{
                                        paddingLeft: "10%",
                                        paddingRight: "0",
                                      }}
                                    >
                                      <div className="image-wrapper">
                                        <img
                                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic14.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="item-wrapper">
                                        <ul>
                                          <li>
                                            <span>
                                              <b>HIGH-BACK CHAIRS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Recliners</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Armchairs with footstool</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Ratan armchairs</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="megamenu-wrapper-inner-item">
                                    <div
                                      className="item-wrapper-inner"
                                      style={{
                                        paddingLeft: "10%",
                                        paddingRight: "0",
                                        border: "none",
                                      }}
                                    >
                                      <div className="image-wrapper">
                                        <img
                                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-product-pic15.webp"
                                          alt=""
                                        />
                                      </div>
                                      <div className="item-wrapper">
                                        <ul>
                                          <li>
                                            <span>
                                              <b>KIDS CHAIRS</b>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Wing chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Rocking chairs</a>
                                            </span>
                                          </li>
                                          <li>
                                            <span>
                                              <a>Kids armchairs parts</a>
                                            </span>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="megamenu-wrapper-inner-item"
                                    style={{ width: "100%" }}
                                  >
                                    <div
                                      className="item-wrapper-inner"
                                      style={{
                                        paddingTop: "20px",
                                        paddingRight: "0",
                                        border: "none",
                                      }}
                                    >
                                      <ul className="clients">
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic4.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic3.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic1.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic2.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                        <li style={{ width: "20%" }}>
                                          <div className="client-wrapper">
                                            <div className="client-image-wrapper">
                                              <img
                                                src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-clients-pic5.svg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="menu-subitem">
                            <a className="menu-link menu-sublink">
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon6.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span className="menu-label">Cabinets</span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-subitem">
                            <a
                              className="menu-link menu-sublink"
                              onClick={() => navigate("/sofas")}
                            >
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon5.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span className="menu-label">Sofas</span>
                              </span>
                            </a>
                          </li>
                          <li className="menu-subitem">
                            <a className="menu-link menu-sublink">
                              <span className="menu-icon">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon8.svg"
                                  alt=""
                                />
                              </span>
                              <span className="label-wrapper">
                                <span
                                  className="menu-label"
                                  style={{ color: "#EE6352" }}
                                >
                                  Sales
                                </span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="browse-categories-mobile">
                  <div className="browse-categories-mobile-inner">
                    <a onClick={handleOpenCloseCategoriesDrawer}>
                      <div className="icon-wrapper-mobile">
                        <img
                          src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-about-icon3.svg"
                          alt=""
                        />
                      </div>
                      <div className="desc-wrapper-mobile">Categories</div>
                    </a>
                    <CategoriesDrawer />
                  </div>
                </div>
              </div>
              <div className="menu-wrapper">
                <div className="menu-wrapper-inner">
                  <ul className="nav-menu">
                    <li className="nav-menu-item">
                      <a>
                        <span className="">Home</span>
                      </a>
                    </li>
                    <li
                      className={`nav-menu-item ${
                        page === "SHOP" ? "active" : ""
                      }`}
                    >
                      <a onClick={() => navigate("/")}>
                        <span className="">Shop</span>
                      </a>
                    </li>
                    <li className="nav-menu-item">
                      <a>
                        <span className="">Blog</span>
                      </a>
                    </li>
                    <li className="nav-menu-item">
                      <a>
                        <span className="">Collections</span>
                      </a>
                    </li>
                    <li className="nav-menu-item">
                      <a>
                        <span className="">About us</span>
                      </a>
                    </li>
                    <li className="nav-menu-item">
                      <a>
                        <span className="">Contact</span>
                      </a>
                    </li>
                  </ul>
                  <div
                    className="menu-icon-mobile"
                    onClick={handleOpenCloseMenuDrawer}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section header-bottom-mobile">
          <div className="section-wrapper container">
            <div className="header-bottom-mobile-wrapper">
              <div className="header-bottom-mobile-wrapper-inner">
                <div className="header-bottom-mobile-menu">
                  <div className="header-bottom-mobile-menu-inner">
                    <ul>
                      <li>
                        <a>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon1.svg"
                              alt=""
                            />
                          </span>
                          <span className="label">Chairs</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon2.svg"
                              alt=""
                            />
                          </span>
                          <span className="label">Beds</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon7.svg"
                              alt=""
                            />
                          </span>
                          <span className="label">Lamps</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon3.svg"
                              alt=""
                            />
                          </span>
                          <span className="label">Tables</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon4.svg"
                              alt=""
                            />
                          </span>
                          <span className="label">Armchairs</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon6.svg"
                              alt=""
                            />
                          </span>
                          <span className="label">Cabinets</span>
                        </a>
                      </li>
                      <li>
                        <a onClick={() => navigate("/sofas")}>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon5.svg"
                              alt=""
                            />
                          </span>
                          <span className="label">Sofas</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span className="menu-icon">
                            <img
                              src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-menu-icon8.svg"
                              alt=""
                            />
                          </span>
                          <span className="label" style={{ color: "#EE6352" }}>
                            Sales
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
