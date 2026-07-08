function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: "★★★★★",
      review:
        "Excellent service! The driver was punctual and the vehicle was very clean. Highly recommended.",
    },
    {
      name: "Priya Patel",
      rating: "★★★★★",
      review:
        "Booked an airport transfer and everything went smoothly. Very professional service.",
    },
    {
      name: "Arjun Kumar",
      rating: "★★★★★",
      review:
        "Comfortable journey from Bengaluru to Mysore. Driver was friendly and experienced.",
    },
    {
      name: "Sneha Reddy",
      rating: "★★★★★",
      review:
        "Best taxi service for family trips. Clean vehicles and affordable pricing.",
    },
    {
      name: "Vikram Singh",
      rating: "★★★★★",
      review:
        "Amazing experience. Booking process was easy and customer support was responsive.",
    },
    {
      name: "Anjali Verma",
      rating: "★★★★★",
      review:
        "Very reliable service. Will definitely book again for future travel.",
    },
    {
      name: "Rahul Sharma",
      rating: "★★★★★",
      review:
        "Excellent service! The driver was punctual and the vehicle was very clean. Highly recommended.",
    },
    {
      name: "Priya Patel",
      rating: "★★★★★",
      review:
        "Booked an airport transfer and everything went smoothly. Very professional service.",
    },
    {
      name: "Arjun Kumar",
      rating: "★★★★★",
      review:
        "Comfortable journey from Bengaluru to Mysore. Driver was friendly and experienced.",
    },
    {
      name: "Sneha Reddy",
      rating: "★★★★★",
      review:
        "Best taxi service for family trips. Clean vehicles and affordable pricing.",
    },
    {
      name: "Vikram Singh",
      rating: "★★★★★",
      review:
        "Amazing experience. Booking process was easy and customer support was responsive.",
    },
    {
      name: "Anjali Verma",
      rating: "★★★★★",
      review:
        "Very reliable service. Will definitely book again for future travel.",
    },
    {
      name: "Rahul Sharma",
      rating: "★★★★★",
      review:
        "Excellent service! The driver was punctual and the vehicle was very clean. Highly recommended.",
    },
    {
      name: "Priya Patel",
      rating: "★★★★★",
      review:
        "Booked an airport transfer and everything went smoothly. Very professional service.",
    },
    {
      name: "Arjun Kumar",
      rating: "★★★★★",
      review:
        "Comfortable journey from Bengaluru to Mysore. Driver was friendly and experienced.",
    },
    {
      name: "Sneha Reddy",
      rating: "★★★★★",
      review:
        "Best taxi service for family trips. Clean vehicles and affordable pricing.",
    },
    {
      name: "Vikram Singh",
      rating: "★★★★★",
      review:
        "Amazing experience. Booking process was easy and customer support was responsive.",
    },
    {
      name: "Anjali Verma",
      rating: "★★★★★",
      review:
        "Very reliable service. Will definitely book again for future travel.",
    },
  ];

  return (
    <div className="reviews-page">
      <div className="reviews-header">
        <h1>Customer Reviews</h1>
        <p>
          Hear what our happy customers have to say about their experience
          with Ajay Taxi Services.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <h3>{item.name}</h3>
            <div className="stars">{item.rating}</div>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;