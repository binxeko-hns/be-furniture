import "./productList.scss";
import { ProductType } from "../../configs/type";
import { formatToUSD } from "../../configs/constants";
import { useNavigate } from "react-router-dom";

type PropsType = {
  data?: ProductType[];
  viewStyle?: string;
};

const ProductList = ({ data = [], viewStyle = "grid" }: PropsType) => {
  const navigate = useNavigate();
  let _viewStyle = viewStyle
  const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
  if (screenWidth < 768) _viewStyle = "grid"
  return (
    <div className="products-list">
      {_viewStyle === "grid" && (
        <ul className="products-list-wrapper">
          {(data.length > 0 &&
            data.map((product) => (
              <li className="product-wrapper">
                <div className="product-image">
                  <div
                    className="product-image-wrapper"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.isOnSale && (
                      <span className="sale-label">on sale</span>
                    )}
                    <div className="image-wrapper">
                      <img src={product.productImage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="product-title">
                  <p
                    className="title"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.productName}
                  </p>
                  <div
                    className="rate"
                    dangerouslySetInnerHTML={{ __html: product.rate }}
                  />
                </div>
                <div className="product-price">
                  <p className="price">
                    <del>
                      <span>
                        <bdi>
                          {formatToUSD.format(product.priceWithoutSale!)}
                        </bdi>
                      </span>
                    </del>
                    <ins>
                      <span>
                        <bdi>{formatToUSD.format(product.price)}</bdi>
                      </span>
                    </ins>
                  </p>
                </div>
              </li>
            ))) || <></>}
        </ul>
      )}
      {_viewStyle === "column" &&  screenWidth > 767 && (
        <ul className="product-list-wrapper-column">
          {data.length > 0 &&
            data.map((product) => (
              <li className="product-wrapper-column">
                <div className="product-row-image">
                  <div
                    className="product-row-image-wrapper"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.isOnSale && (
                      <span className="on-sale-label">On Sale</span>
                    )}
                    <div className="image-wrapper">
                      <img src={product.productImage} alt="" />
                    </div>
                  </div>
                </div>
                <div className="product-row-title">
                  <p className="title">
                    <a onClick={() => navigate(`/product/${product.id}`)}>
                      {product.productName}
                    </a>
                  </p>
                  <div
                    className="rate"
                    dangerouslySetInnerHTML={{ __html: product.rate }}
                  />
                </div>
                <div className="product-row-price">
                  <p className="price">
                    <del>
                      <span>
                        {formatToUSD.format(product.priceWithoutSale!)}
                      </span>
                    </del>
                    <ins>
                      <span>{formatToUSD.format(product.price)}</span>
                    </ins>
                  </p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
