import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./Pages/HomePage";
import ProductDesc from "./Pages/ProductDesc";
import CheckOut from "./Pages/CheckOut";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import MobilesPage from "./Pages/MobilesPage";
import WishListPage from "./Pages/WishListPage";
import ReturnsPage from "./Pages/ReturnsPage";
import FaqPage from "./Pages/FaqPage";
import ContactUsPage from "./Pages/ContactUsPage";
import OrderTackingPage from "./Pages/OrderTackingPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import TermsAndConditionPage from "./Pages/TermsAndConditionPage";

// Layouts
import MainLayout from "./Layout/MainLayout";

// data
import productdata from "./Utility/data.json";
import { ProductProvider } from "./services/ProductContextApi";
import ScrollToTop from "./services/LocationPath";
import TitleManager from "./services/TitleManager";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <TitleManager/>
        <ProductProvider>
          <Routes>
            {/* Layout for login & signup only (no header/footer) */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Layout with header/footer */}
            <Route element={<MainLayout />}>
              <Route
                path="/home"
                element={<HomePage products={productdata} />}
              />
              <Route path="/product" element={<ProductDesc />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/wishlist" element={<WishListPage />} />
              <Route path="/mobiles" element={<MobilesPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/faqs" element={<FaqPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/ordertracking" element={<OrderTackingPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route
                path="/termsandcondition"
                element={<TermsAndConditionPage />}
              />
            </Route>
          </Routes>
        </ProductProvider>
      </Router>
    </div>
  );
};

export default App;
