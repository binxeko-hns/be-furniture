import { useEffect, useState, MouseEvent } from "react";
import { mockSofasData, mockShopData } from "../../../services/mockData";
import { useProduct } from "../../../context/ProductProvider";
import { useParams } from "react-router-dom";
import { CartItem, ColorType, ProductType } from "../../../configs/type";

const useProductPage = () => {
  const { product, setProduct } = useProduct();
  const [quantity, setQuantity] = useState<number>(1);
  const { productId } = useParams<string>();
  const [item, setItem] = useState<CartItem>({
    id: 0,
    productImage: "",
    productName: "",
    price: 0,
    priceWithoutSale: 0,
    colorList: [],
    color: "",
    quantity: 0,
    rate: ""
  });
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    const currentProduct = mockShopData.find(
      (item: ProductType) => item.id === parseInt(productId || "0")
    );
    setItem({
      ...item,
      id: currentProduct?.id || 0,
      productImage: currentProduct?.productImage || "",
      productName: currentProduct?.productName || "",
      price: currentProduct?.price || 0,
      colorList: currentProduct?.colorList || [],
      quantity: 1,
      rate: currentProduct?.rate || "",
      priceWithoutSale: currentProduct?.priceWithoutSale || 0
    });
  }, []);

  const [openLightBox, setOpenLightBox] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const handleOpenCloseOpenLightBox = () => {
    setOpenLightBox(!openLightBox);
  };

  const handleOpenCloseCart = () => {
    setOpenCart(!openCart);
  };

  let isDisabled = !item.color;

  const handleChooseColor = (color: ColorType) => {
    setColor(color.code);
    setItem({ ...item, color: color.name });
  };

  const handleIncreaseValue = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseValue = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItemCart = (item: CartItem) => {
    setProduct({ type: "REMOVE_CART_ITEM", item: item });
  };

  const handleAddToCart = () => {
    if (item.color === "") return alert("Choose color");
    setProduct({
      type: "ADD_CART_ITEM",
      item: { ...item, quantity: quantity },
    });
    handleOpenCloseCart()
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return {
    cartCount,
    color,
    product,
    quantity,
    item,
    isDisabled,
    openLightBox,
    handleOpenCloseOpenLightBox,
    mockSofasData,
    openCart,
    handleOpenCloseCart,
    handleChooseColor,
    handleDecreaseItemCart,
    handleIncreaseItemCart,
    handleDecreaseValue,
    handleIncreaseValue,
    handleAddToCart,
    handleRemoveItemCart,
  };
};

export default useProductPage;
