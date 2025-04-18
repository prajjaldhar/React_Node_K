import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-blue-100">
      <NavBar />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Privacy Policy
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-xl shadow-blue-400 space-y-6">
          <p>
            At Croma, we are committed to protecting your personal information
            and respecting your privacy. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you interact with our
            services.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            1. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside">
            <li>
              Personal details like name, email address, and contact
              information.
            </li>
            <li>Payment and transaction details.</li>
            <li>Demographic information and preferences.</li>
            <li>Browsing behavior and device information.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-blue-600">
            2. How We Use Your Information
          </h2>
          <p>The information we collect is used to:</p>
          <ul className="list-disc list-inside">
            <li>Process transactions and deliver products/services.</li>
            <li>Improve our website and customer service.</li>
            <li>Send promotional communications, if opted-in.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-blue-600">
            3. Data Sharing and Disclosure
          </h2>
          <p>
            We do not sell your personal information. We may share your data
            with:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Trusted third-party service providers assisting in our operations.
            </li>
            <li>Legal authorities when required by law.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-blue-600">
            4. Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your data from
            unauthorized access, alteration, or disclosure.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            5. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. To exercise these rights, please contact us at{" "}
            <a
              href="mailto:customersupport@croma.com"
              className="text-blue-600 underline"
            >
              customersupport@croma.com
            </a>
            .
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated revision date.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
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

export default PrivacyPolicyPage;
