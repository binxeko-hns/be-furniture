import useProductPage from "../hooks/useProductPage";
import { formatToUSD } from "../../../configs/constants";
import "../styles/productPage.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import LightboxImage from "../../../components/LightboxImage/LightboxImage";
import ProductList from "../../../components/ProductList/ProductList";
import CartDrawer from "../../../components/CartDrawer/CartDrawer";

const ProductPage = () => {
  const {
    cartCount,
    product,
    color,
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
  } = useProductPage();

  return (
    <div style={{ paddingTop: "218px" }}>
      <Header cartCount={cartCount} onOpenCartDrawer={handleOpenCloseCart} />
      <CartDrawer
        product={product.cart}
        open={openCart}
        onClose={handleOpenCloseCart}
        onOpen={handleOpenCloseCart}
        onRemoveItemCart={handleRemoveItemCart}
        onDecreaseItemCart={handleDecreaseItemCart}
        onIncreaseItemCart={handleIncreaseItemCart}
      />
      <LightboxImage
        open={openLightBox}
        onClose={handleOpenCloseOpenLightBox}
        imgSrc={item.productImage}
      />
      <div className="product-page">
        <div className="product-page-wrapper">
          <div className="main-content">
            <div className="main-content-wrapper container">
              <div className="product-image">
                <div className="product-image-wrapper">
                  <div className="product-image-wrapper-inner">
                    <a onClick={handleOpenCloseOpenLightBox}>
                      <img src={item.productImage} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="sticky-wrapper">
                <div className="sticky-rails">
                  <div className="sticky-wrapper-inner">
                    <div className="sticky-element">
                      <div className="sticky-element-inner">
                        <div className="full-wrap">
                          <div className="content-inner">
                            <h3 className="title">{item.productName}</h3>
                          </div>
                        </div>
                        <div className="full-wrap">
                          <div className="content-inner">
                            <div
                              className="rate"
                              dangerouslySetInnerHTML={{ __html: item.rate }}
                            />
                            <a href="#reviews" className="review-count">
                              (1 customer review)
                            </a>
                          </div>
                        </div>
                        <div className="full-wrap">
                          <div className="content-inner">
                            <div className="price">
                              <del>
                                <span>
                                  <bdi>
                                    {formatToUSD.format(item.priceWithoutSale)}
                                  </bdi>
                                </span>
                              </del>
                              <ins>
                                <span>
                                  <bdi>{formatToUSD.format(item.price)}</bdi>
                                </span>
                              </ins>
                            </div>
                          </div>
                        </div>
                        <div className="full-wrap">
                          <div className="content-inner">
                            <div className="add-to-cart">
                              <div className="variations-wrapper">
                                <div className="vw">
                                  <label>Warranty</label>
                                  <a className="warranty">
                                    <img
                                      src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/01/befurniturestore2-shopattr-pic2.svg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="vw">
                                  <label>Color</label>
                                  <ul className="color-list">
                                    {item.colorList.map((i) => (
                                      <li>
                                        <a
                                          onClick={() => handleChooseColor(i)}
                                          className={
                                            color.toLowerCase() ===
                                            i.code.toLowerCase()
                                              ? "active"
                                              : ""
                                          }
                                        >
                                          <span
                                            style={{ backgroundColor: i.code }}
                                          ></span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <div className="button-add">
                                <div className="button-add-wrapper">
                                  <div className="quantity">
                                    <a
                                      className="quantity-change minus"
                                      onClick={handleDecreaseValue}
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </a>
                                    <input
                                      type="number"
                                      value={quantity}
                                      size={4}
                                      min={1}
                                      inputMode="numeric"
                                    />
                                    <a
                                      className="quantity-change plus"
                                      onClick={handleIncreaseValue}
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </a>
                                  </div>
                                  <button
                                    className={isDisabled ? "disable" : ""}
                                    disabled={isDisabled}
                                    onClick={handleAddToCart}
                                  >
                                    BUY NOW
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="full-wrap">
                          <div className="content-inner-2">
                            <div className="icon-box">
                              <div className="icon-wrapper">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-product-icon2.svg"
                                  alt=""
                                />
                              </div>
                              <div className="desc-wrapper">
                                <h5 className="title">Free shipping</h5>
                                <div className="desc">Over 500$</div>
                              </div>
                            </div>
                          </div>
                          <div className="content-inner-2">
                            <div className="icon-box">
                              <div className="icon-wrapper">
                                <img
                                  src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-product-icon1.svg"
                                  alt=""
                                />
                              </div>
                              <div className="desc-wrapper">
                                <h5 className="title">Chat online</h5>
                                <div className="desc">
                                  Contact with your agent
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <div className="product-desc-inner">
                  <div className="product-desc-inner-content">
                    <div className="product-desc-inner-content-wrapper">
                      <div className="full-wrap">
                        <div className="content-inner">
                          <h3 className="title">Ut et montes mauris ornare</h3>
                        </div>
                      </div>
                      <div className="full-wrap">
                        <div className="content-inner">
                          Ut et montes mauris ornare. Sed enim dignissim
                          convallis malesuada dapibus. Aliquet placerat eget
                          convallis arcu pharetra vitae tempor sit. Neque duis
                          non pellentesque enim tellus magna facilisis neque
                          donec. Pellentesque tempor scelerisque tempus nascetur
                          cursus ac pellentesque. Felis bibendum id duis odio.
                          Nisl id blandit purus id sed odio nullam scelerisque
                          dolor. Commodo imperdiet ultricies ipsum ut nunc
                          senectus. Convallis facilisis euismod vel volutpat.
                        </div>
                      </div>
                      <div className="full-wrap">
                        <div className="content-inner">
                          <img
                            src="https://themes.muffingroup.com/be/furniturestore2/wp-content/uploads/2023/02/befurniturestore2-productdetails-pic1.webp"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="full-wrap">
                        <div className="content-inner">
                          <h3 className="title">
                            Tempor nunc sed arcu lectus dignissim congue.
                          </h3>
                        </div>
                      </div>
                      <div className="full-wrap">
                        <div className="content-inner">
                          Morbi ut sit iaculis non. Sodales aliquet nulla
                          posuere leo euismod amet. Amet nullam tincidunt
                          imperdiet in tellus congue sed. Eleifend nisl
                          tincidunt porttitor libero facilisis placerat turpis.
                          Nunc nullam dignissim nibh sapien. Ullamcorper quam
                          est nec ipsum suspendisse vulputate ullamcorper
                          adipiscing id. Ultricies varius in viverra ac molestie
                          nibh. Eget nulla purus nisl tempor bibendum. Sed
                          nascetur pretium nibh ullamcorper amet condimentum
                          molestie penatibus in. Sed facilisis at id neque sit
                          pretium platea. Ultrices fermentum consectetur
                          tristique ultrices ac commodo vitae. Lectus et eu
                          massa auctor.
                        </div>
                      </div>
                      <div className="full-wrap">
                        <div className="content-inner">
                          <img
                            src={item.productImage}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="full-wrap">
                        <div className="content-inner">
                          <div className="product-additional-infor">
                            <h3>Additional information</h3>
                            <table>
                              <tbody>
                                <tr>
                                  <th>
                                    <span>Weight</span>
                                  </th>
                                  <td>
                                    <span>15 kg</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <span>Dimensions</span>
                                  </th>
                                  <td>
                                    <span>120 x 120 x 50cm</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <span>Warranty</span>
                                  </th>
                                  <td>
                                    <span>5 year's</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <span>Color</span>
                                  </th>
                                  <td>
                                    <span>White, Gray, Good</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <span>Materials</span>
                                  </th>
                                  <td>
                                    <span>Textile, Velvet, Wood</span>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <span>Room</span>
                                  </th>
                                  <td>
                                    <span>Living room</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews-wrapper">
            <div className="reviews-wrapper-inner container">
              <div className="review-box">
                <div className="review-box-inner">
                  <div id="reviews" className="review">
                    <div className="comment">
                      <h3 className="review-title">
                        1 review for Cosy RTV sofa
                      </h3>
                      <ol className="comment-list">
                        <li>
                          <div className="comment-container">
                            <img
                              src="https://secure.gravatar.com/avatar/ee62ac86f08fd6ffac18cbf25b07679f?s=60&d=mm&r=g"
                              alt=""
                              className="avatar"
                            />
                            <div className="comment-text">
                              <div className="rate">
                                <i className="fa-solid fa-star active"></i>
                                <i className="fa-solid fa-star active"></i>
                                <i className="fa-solid fa-star active"></i>
                                <i className="fa-solid fa-star active"></i>
                                <i className="fa-solid fa-star active"></i>
                              </div>
                              <p className="meta">
                                <strong>Muffingroup</strong> -{" "}
                                <time dateTime="2023-02-10T09:43:21+00:00">
                                  February 10, 2023
                                </time>
                              </p>
                              <div className="description">
                                <p>Love to watch TV in it</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div className="review-form-wrapper">
                      <div className="comment-respond">
                        <span>Add a review</span>
                        <p className="must-log-in">
                          You must be <a href="#">logged in</a> to post a
                          review.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related-product">
            <div className="container">
              <div className="related-product-wrapper">
                <div className="related-product-divider">
                  <div className="related-product-divider-inner">
                    <div className="divider-inner">
                      <span>BE FURNITURE</span>
                    </div>
                  </div>
                </div>
                <div className="related-product-list">
                  <div className="related-product-list-inner">
                    <h3 className="title">Related products</h3>
                    <ProductList data={mockSofasData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
