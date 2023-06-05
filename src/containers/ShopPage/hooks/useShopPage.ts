import React, { useState, useMemo } from "react";
import { useProduct } from "../../../context/ProductProvider";
import { rooms } from "../../../configs/constants";
import { CartItem, ProductType } from "../../../configs/type";

const initMin = 100;
const initMax = 1900;
const minDistance = 10;

const useShopPage = (data?: ProductType[] | []) => {
  const { product, setProduct } = useProduct();
  const [openFilter, setOpenFitler] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const [viewStyle, setViewStyle] = useState<string>("grid");
  const [materialsList, setMaterialsList] = useState<string>("");
  const [rangePrice, setRangePrice] = useState<number[]>([initMin, initMax]);
  const [checkRooms, setCheckRooms] = useState<boolean[]>(
    new Array(rooms.length).fill(false)
  );

  let isFiltering = false;

  const equar = (a: boolean[], b: boolean[]) => {
    if (a.length !== b.length) {
      return false;
    } else {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
  };

  const handleCheckRoom = (roomIndex: number) => {
    const updateCheckRooms = checkRooms.map((item, index) =>
      index === roomIndex ? !item : item
    );
    setCheckRooms(updateCheckRooms);
  };

  const handleChangeRangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRangePrice([
        Math.min(newValue[0], rangePrice[1] - minDistance),
        rangePrice[1],
      ]);
    } else {
      setRangePrice([
        rangePrice[0],
        Math.max(newValue[1], rangePrice[0] + minDistance),
      ]);
    }
  };

  const handleChangeInputPriceMin = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRangePrice([parseInt(e.target.value), rangePrice[1]]);
  };

  const handleChangeInputPriceMax = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRangePrice([rangePrice[0], parseInt(e.target.value)]);
  };

  const handleChooseMaterialFilter = (i: string) => {
    if (materialsList.toLowerCase().includes(i.toLowerCase())) {
      if (materialsList.indexOf(i) === materialsList.length - 1) {
        setMaterialsList(materialsList.replace(`${i}, `, ""));
      } else if (materialsList.toLowerCase().indexOf(i.toLowerCase()) === 0) {
        setMaterialsList(materialsList.replace(`${i}`, ""));
      } else {
        setMaterialsList(materialsList.replace(`, ${i}`, ""));
      }
    } else {
      if (materialsList.length === 0) {
        setMaterialsList(i);
      } else {
        setMaterialsList(`${materialsList}, ${i}`);
      }
    }
  };

  const handleResetRangePrice = () => {
    setRangePrice([initMin, initMax]);
  };

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

  const filteredData = useMemo(() => {
    let _data = data;
    if (materialsList.length > 0) {
      _data = _data?.filter((product) =>
        product.material?.toLowerCase().includes(materialsList.toLowerCase())
      );
    }
    console.log({ _data });

    if (rangePrice[0] !== initMin || rangePrice[1] !== initMax) {
      _data = _data?.filter(
        (product) =>
          product.price <= rangePrice[1] && product.price >= rangePrice[0]
      );
    }

    if (!equar(checkRooms, [false, false, false, false, false])) {
      _data = _data?.filter((product) =>
        checkRooms
          .map((check, index) => (check ? rooms[index] : ""))
          .includes(product.room!)
      );
    }

    if (
      (materialsList.length ==
        0 &&
        rangePrice[0] === initMin &&
        rangePrice[1] === initMax &&
        equar(checkRooms, [false, false, false, false, false]))
    ) {
      isFiltering = false;
    } else {
      isFiltering = true;
    }

    return _data;
  }, [materialsList, rangePrice, checkRooms]);
  console.log({ filteredData });

  return {
    product,
    viewStyle,
    openFilter,
    openCart,
    cartCount,
    materialsList,
    rangePrice,
    checkRooms,
    handleOpenCloseFilter,
    handleOpenCloseCart,
    handleChooseViewStyle,
    handleRemoveItemCart,
    handleDecreaseItemCart,
    handleIncreaseItemCart,
    handleChangeRangePrice,
    handleResetRangePrice,
    handleChangeInputPriceMin,
    handleChangeInputPriceMax,
    handleChooseMaterialFilter,
    handleCheckRoom,
    filteredData,
    isFiltering,
  };
};

export default useShopPage;
