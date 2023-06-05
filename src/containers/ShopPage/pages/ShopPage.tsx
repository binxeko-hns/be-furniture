import { useEffect } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import ProductList from "../../../components/ProductList/ProductList";
import CartDrawer from "../../../components/CartDrawer/CartDrawer";
import "../styles/shopPage.scss";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import FiltersDrawer from "../../../components/FiltersDrawer/FiltersDrawer";
import useShopPage from "../hooks/useShopPage";
import { ProductType } from "../../../configs/type";

type PropsType = {
  title: string;
  data: ProductType[];
};

const ShopPage = ({ title, data }: PropsType) => {
  const {
    product,
    cartCount,
    openFilter,
    openCart,
    handleOpenCloseFilter,
    handleOpenCloseCart,
    viewStyle,
    handleChooseViewStyle,
    handleRemoveItemCart,
    handleIncreaseItemCart,
    handleDecreaseItemCart,
  } = useShopPage();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title]);
  return (
    <div style={{ paddingTop: "218px" }}>
      <Header
        cartCount={cartCount}
        page={title}
        onOpenCartDrawer={handleOpenCloseCart}
      />
      <FiltersDrawer
        open={openFilter}
        onCLose={handleOpenCloseFilter}
        onOpen={handleOpenCloseFilter}
      />
      <CartDrawer
        product={product.cart}
        open={openCart}
        onClose={handleOpenCloseCart}
        onOpen={handleOpenCloseCart}
        onRemoveItemCart={handleRemoveItemCart}
        onDecreaseItemCart={handleDecreaseItemCart}
        onIncreaseItemCart={handleIncreaseItemCart}
      />
      <div className="shop-page">
        <div className="container">
          <div className="shop-page-wrapper">
            <div className="page-wrapper">
              <div className="header-page-wrapper">
                <h1 className="title">{title}</h1>
              </div>
            </div>
            <div className="page-wrapper">
              <div className="main-content-wrapper">
                <div className="filter-wrapper">
                  <p>Showing all {data.length} result</p>
                  <div className="view-list-option">
                    <div className="list-perpage">
                      <span className="show">Show:</span>
                      <ul>
                        <li>
                          <span>60</span>
                        </li>
                        <li className="active">
                          <span>120</span>
                        </li>
                        <li>
                          <span>240</span>
                        </li>
                        <li>
                          <span>360</span>
                        </li>
                      </ul>
                    </div>
                    <div className="list-style">
                      <ul>
                        <li
                          className={viewStyle === "grid" ? "active" : ""}
                          onClick={() => handleChooseViewStyle("grid")}
                        >
                          <WindowOutlinedIcon />
                        </li>
                        <li>
                          <GridOnOutlinedIcon />
                        </li>
                        <li>
                          <ViewWeekOutlinedIcon />
                        </li>
                        <li
                          className={viewStyle === "column" ? "active" : ""}
                          onClick={() => handleChooseViewStyle("column")}
                        >
                          <TableRowsOutlinedIcon />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="select-menu">
                    <select>
                      <option value="">Default sorting</option>
                      <option value="">Default sorting</option>
                      <option value="">Default sorting</option>
                      <option value="">Default sorting</option>
                    </select>
                  </div>
                  <a className="filter-button" onClick={handleOpenCloseFilter}>
                    <TuneOutlinedIcon />
                    Filters
                  </a>
                </div>
                <div className="content">
                  <ProductList data={data} viewStyle={viewStyle} />
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

export default ShopPage;
