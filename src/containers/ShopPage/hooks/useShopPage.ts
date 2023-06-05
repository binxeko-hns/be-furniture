import { useState } from "react";
import { useProduct } from "../../../context/ProductProvider";
import { CartItem } from "../../../configs/type";

const useShopPage = () => {
  const {product, setProduct} = useProduct()
  const [openFilter, setOpenFitler] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [viewStyle, setViewStyle] = useState<string>("grid");

  const handleOpenCloseFilter = () => {
    setOpenFitler(!openFilter);
  };

  const handleOpenCloseCart = () => {
    setOpenCart(!openCart);
  };

  const handleChooseViewStyle = (view: string) => {
    setViewStyle(view);
  };

  const handleRemoveItemCart = (item: CartItem) => {
    setProduct({ type: "REMOVE_CART_ITEM", item: item });
  };

  const handleIncreaseItemCart = (item: CartItem) => {
    setProduct({ type: "INCREASE_QUANTITY", item: item });
  };

  const handleDecreaseItemCart = (item: CartItem) => {
    setProduct({ type: "DECREASE_QUANTITY", item: item });
  };

  let cartCount = product.cart
  .map((el) => el.quantity)
  .reduce((accumulator, current) => accumulator + current, 0);


  return {
    product,
    viewStyle,
    openFilter,
    openCart,
    cartCount,
    handleOpenCloseFilter,
    handleOpenCloseCart,
    handleChooseViewStyle,
    handleRemoveItemCart,
    handleDecreaseItemCart,
    handleIncreaseItemCart
  };
};

export default useShopPage;
