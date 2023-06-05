export interface ColorType {
  name: string;
  code: string;
}

export interface ProductType {
  id: number;
  productName: string;
  rate: string;
  productImage: string;
  priceWithoutSale: number | null;
  price: number;
  isOnSale: boolean;
  colorList: ColorType[];
}

export interface CartItem {
  id: number;
  productImage: string;
  productName: string;
  price: number;
  colorList: ColorType[];
  color: string;
  quantity: number;
  rate: string;
  priceWithoutSale: number;
}

export interface InitValueType {
  cart: CartItem[];
  wishlist: number[];
}

export type ProductAction =
  | {
      type: "ADD_CART_ITEM";
      item: CartItem;
    }
  | {
      type: "WISHLIST";
      wishlist: number;
    }
  | {
      type: "REMOVE_CART_ITEM";
      item: CartItem;
    }
  | {
      type: "INCREASE_QUANTITY";
      item: CartItem;
    }
  | {
      type: "DECREASE_QUANTITY";
      item: CartItem;
    };
