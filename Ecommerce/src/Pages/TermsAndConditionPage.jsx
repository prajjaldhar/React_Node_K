import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const TermsAndConditionPage = () => {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Terms and Conditions
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-xl shadow-blue-400 space-y-6">
          <p>
            Welcome to Croma. By accessing or using our website, you agree to be
            bound by these Terms and Conditions. Please read them carefully.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            1. Acceptance of Terms
          </h2>
          <p>
            By using our services, you confirm that you accept these terms and
            agree to comply with them. If you do not agree, please do not use
            our services.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            2. Use of the Website
          </h2>
          <p>
            You agree to use the website for lawful purposes only. You must not
            use our site in any way that breaches any applicable local,
            national, or international law or regulation.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            3. Intellectual Property Rights
          </h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of Croma or its content suppliers and is
            protected by applicable intellectual property laws.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            4. Product Information
          </h2>
          <p>
            We strive to ensure that all product details, descriptions, and
            prices are accurate. However, errors may occur. If we discover an
            error in the price or description of a product you have ordered, we
            will inform you as soon as possible.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            5. Limitation of Liability
          </h2>
          <p>
            Croma shall not be liable for any indirect, incidental, special, or
            consequential damages arising out of or in connection with the use
            of our website or services.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Any changes will be posted on this page, and your continued
            use of the website will signify your acceptance of the updated
            terms.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            7. Governing Law
          </h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of India. Any disputes arising in connection with these terms
            shall be subject to the exclusive jurisdiction of the courts of
            Mumbai, India.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            8. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:customersupport@croma.com"
              className="text-blue-600 underline"
            >
              customersupport@croma.com
            </a>
            <br />
            <strong>Phone:</strong> 1800 57 27662
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsAndConditionPage;
