const productdata = [
  {
    id: 1,
    productName: "Smartphone XYZ",
    productDescription: "A high-performance smartphone with a sleek design.",
    productColor: ["Black", "Silver", "Gold"],
    productReviews: [
      {
        userId: 101,
        username: "john_doe",
        productReview:
          "Great phone! The camera is fantastic and the battery lasts all day.",
        dateOfReview: "2024-12-01",
        reviewId: 1,
        parentReviewId: null, // Original Review
      },
      {
        userId: 102,
        username: "jane_smith",
        productReview:
          "I agree! But do you feel the screen brightness could be better?",
        dateOfReview: "2024-12-02",
        reviewId: 2,
        parentReviewId: 1, // Reply to john_doe
      },
      {
        userId: 101,
        username: "john_doe",
        productReview:
          "Yeah, I noticed that too. But the battery life makes up for it.",
        dateOfReview: "2024-12-03",
        reviewId: 3,
        parentReviewId: 2, // Reply to jane_smith
      },
    ],
  },
  {
    id: 2,
    productName: "Laptop ABC",
    productDescription:
      "A lightweight laptop with a powerful processor for work and play.",
    productColor: ["Gray", "Blue", "Red"],
    productReviews: [
      {
        userId: 103,
        username: "alice_williams",
        productReview:
          "The laptop is very fast and portable, but the keyboard is a bit stiff.",
        dateOfReview: "2024-11-25",
        reviewId: 4,
        parentReviewId: null,
      },
      {
        userId: 104,
        username: "bob_jones",
        productReview: "Does it get warm during long usage?",
        dateOfReview: "2024-11-26",
        reviewId: 5,
        parentReviewId: 4, // Reply to alice_williams
      },
      {
        userId: 103,
        username: "alice_williams",
        productReview:
          "A little, but it stays manageable. A cooling pad helps!",
        dateOfReview: "2024-11-27",
        reviewId: 6,
        parentReviewId: 5, // Reply to bob_jones
      },
      {
        userId: 101,
        username: "john_doe",
        productReview:
          "Agreed! The cooling system is good but could be improved.",
        dateOfReview: "2024-11-28",
        reviewId: 7,
        parentReviewId: 5, // Another reply to bob_jones
      },
    ],
  },
  {
    id: 3,
    productName: "Wireless Headphones",
    productDescription: "Noise-canceling wireless headphones with deep bass.",
    productColor: ["White", "Black"],
    productReviews: [
      {
        userId: 106,
        username: "charlie_brown",
        productReview:
          "Excellent sound quality! They fit comfortably, but could use better noise-canceling.",
        dateOfReview: "2024-12-05",
        reviewId: 8,
        parentReviewId: null,
      },
      {
        userId: 107,
        username: "emily_clark",
        productReview: "Is the bass strong enough for EDM music?",
        dateOfReview: "2024-12-06",
        reviewId: 9,
        parentReviewId: 8, // Reply to charlie_brown
      },
      {
        userId: 106,
        username: "charlie_brown",
        productReview: "Yeah, but not as deep as studio headphones.",
        dateOfReview: "2024-12-07",
        reviewId: 10,
        parentReviewId: 9, // Reply to emily_clark
      },
    ],
  },
];

export default productdata;
