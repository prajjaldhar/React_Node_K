import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const NotFoundPage = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      navigate("/home");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">
      <section className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl bg-white p-8 rounded-lg shadow-xl shadow-blue-400 text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Redirecting to <span className="text-blue-600">Home</span> in
            <span className="font-semibold text-6xl">{counter}</span> seconds...
          </p>
          <a
            href="/home"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Go to Home Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
