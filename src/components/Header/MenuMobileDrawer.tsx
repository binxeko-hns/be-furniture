import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "./header.scss";

type PropsType = {
  open?: boolean;
  onOpen?: Function;
  onClose?: Function;
  page?: string;
};

const MenuMobileDrawer = ({ open, onOpen, onClose, page }: PropsType) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={() => onClose?.()}
      onOpen={() => onOpen?.()}
    >
      <div className="menu-mobile-drawer">
        <span className="close-icon">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <ul className="main-menu-mobile-drawer">
          <li className="main-menu-mobile-item">
            <span className="main-menu-mobile-item-label">Home</span>
          </li>
          <li className="main-menu-mobile-item">
            <span
              className={`main-menu-mobile-item-label ${
                page === "SHOP" ? "active" : ""
              }`}
            >
              Shop
            </span>
          </li>
          <li className="main-menu-mobile-item">
            <span className="main-menu-mobile-item-label">Blog</span>
          </li>
          <li className="main-menu-mobile-item">
            <span className="main-menu-mobile-item-label">Collections</span>
          </li>
          <li className="main-menu-mobile-item">
            <span className="main-menu-mobile-item-label">About us</span>
          </li>
          <li className="main-menu-mobile-item">
            <span className="main-menu-mobile-item-label">Contact</span>
          </li>
        </ul>
      </div>
    </SwipeableDrawer>
  );
};

export default MenuMobileDrawer;
