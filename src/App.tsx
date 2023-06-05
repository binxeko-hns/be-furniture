import { Routes, Route } from "react-router-dom";
import ShopPage from "./containers/ShopPage/pages/ShopPage";
import { mockShopData, mockSofasData } from "./services/mockData";
import { ProductProvider } from "./context/ProductProvider";
import ProductPage from "./containers/ProductPage/layouts/ProductPage";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route
          path="/"
          element={<ShopPage title={"SHOP"} data={mockShopData} />}
        />
        <Route
          path="/sofas"
          element={<ShopPage title={"SOFAS"} data={mockSofasData} />}
        />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
