import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductDesc />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/mobiles" element={<MobilesPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/ordertracking" element={<OrderTackingPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/termsandcondition" element={<TermsAndConditionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
