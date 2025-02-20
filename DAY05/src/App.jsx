import React from "react";
import productdata from "./utility/data";

const ReviewThread = ({ reviews, parentId = null, level = 0 }) => {
  return (
    <div
      className={`mt-4 ${
        level > 0 ? "ml-8 border-l-2 border-gray-600 pl-4" : ""
      }`}
    >
      {reviews
        .filter((review) => review.parentReviewId === parentId)
        .map((review, index, arr) => (
          <div key={review.reviewId} className="relative">
            {/* Vertical thread line */}
            {level > 0 && index !== arr.length - 1 && (
              <div className="absolute top-0 left-[-18px] h-full w-1 bg-gray-600"></div>
            )}

            <div className="flex items-start space-x-4 bg-gray-700 p-4 rounded-lg shadow relative">
              {/* Profile with horizontal thread */}
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-bold">
                  {review.username.charAt(0).toUpperCase()}
                </div>
                {level > 0 && (
                  <div className="absolute top-1/2 left-[-18px] w-4 h-1 bg-gray-600"></div>
                )}
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <p className="text-sm font-bold">{review.username}</p>
                <p className="text-gray-300">{review.productReview}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {review.dateOfReview}
                </p>
              </div>
            </div>

            {/* Recursive call to render replies */}
            <ReviewThread
              reviews={reviews}
              parentId={review.reviewId}
              level={level + 1}
            />
          </div>
        ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Reviews</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {productdata.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* Product Title & Description */}
            <h2 className="text-2xl font-semibold text-blue-400">
              {product.productName}
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              {product.productDescription}
            </p>

            {/* Reviews Section */}
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-300">Reviews:</h3>
              <ReviewThread reviews={product.productReviews} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
