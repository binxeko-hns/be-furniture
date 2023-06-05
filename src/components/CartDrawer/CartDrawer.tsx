import React from "react";
import "./cartDrawer.scss";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { CartItem } from "../../configs/type";
import { formatToUSD } from "../../configs/constants";

type PropsType = {
  product?: CartItem[];
  open: boolean;
  onOpen?: Function;
  onClose?: Function;
  onRemoveItemCart?: Function;
  onIncreaseItemCart?: Function;
  onDecreaseItemCart?: Function;
};

const CartDrawer = ({
  product = [],
  open,
  onOpen,
  onClose,
  onRemoveItemCart,
  onIncreaseItemCart,
  onDecreaseItemCart,
}: PropsType) => {
  let totalPrice = 0;
  for (let i = 0; i < product.length; i++) {
    totalPrice += product[i].price * product[i].quantity;
  }
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={() => onClose?.()}
      onOpen={() => onOpen?.()}
    >
      <div className="cart-drawer">
        <div className="cart-drawer-header">
          <a onClick={() => onClose?.()}>
            <i className="fa-solid fa-xmark"></i>
          </a>
          <h3>
            <ShoppingBagOutlinedIcon />
            Cart
          </h3>
        </div>
        <div className="cart-drawer-content">
          <div className="cart-drawer-content-wrapper">
            {!!product && product.length == 0 ? (
              <div className="cart-empty">
                <p className="cart-empty-icon">
                  <ShoppingBagOutlinedIcon />
                </p>
                <p>Your cart is currently empty.</p>
              </div>
            ) : (
              product?.map((i) => (
                <div className="product-item">
                  <div className="product-item-image">
                    <img src={i.productImage} alt="" />
                  </div>
                  <div className="product-item-info">
                    <h6>
                      {i.productName} - {i.color}
                    </h6>
                    <dl className="variation">
                      <dt className="variation-warranty">Warranty:</dt>
                      <dd className="variation-warranty">5 year's</dd>
                    </dl>
                    <p className="price">
                      Price: <span>{formatToUSD.format(i.price)}</span>
                    </p>
                  </div>
                  <div className="product-item-price">
                    <span>{formatToUSD.format(i.price * i.quantity)}</span>
                  </div>
                  <div className="product-item-footer">
                    <div className="product-item-footer-left">
                      <div className="quantity">
                        <a
                          className="quantity-change minus"
                          onClick={() => onDecreaseItemCart?.(i)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </a>
                        <input
                          type="number"
                          value={i.quantity}
                          size={4}
                          min={1}
                          inputMode="numeric"
                        />
                        <a
                          className="quantity-change plus"
                          onClick={() => onIncreaseItemCart?.(i)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-item-footer-right">
                      <a onClick={() => onRemoveItemCart?.(i)}>
                        <i className="fa-solid fa-trash"></i>Remove
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="cart-drawer-footer">
          <div className="cart-drawer-footer-total">
            <div className="subtotal">
              Subtotal:
              <span>{formatToUSD.format(totalPrice)}</span>
            </div>
            {!!product && product.length > 0 && (
              <div className="subtotal">
                Shipping:
                <span>!Free</span>
              </div>
            )}
            <div className="total">
              Total:
              <strong>
                <span>{formatToUSD.format(totalPrice)}</span>
              </strong>
            </div>
          </div>
          <div className="cart-drawer-footer-button">
            <a className="cart-button">Proceed to checkout</a>
            <a>View cart</a>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default CartDrawer;
