import { useEffect, useState } from "react";
import axios from "axios";
import BookingModal from "../components/BookingModal";


function TourPackages() {
    const [tours, setTours] = useState([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {

  axios
    .get("http://localhost:5000/tours")
    .then((res) => {
      setTours(res.data);
    })
    .catch((err) => console.log(err));

}, []);
  const packages = [
    {
      place: "Mysore",
      days: "1 Day Trip",
      price: "₹2999"
    },
    {
      place: "Coorg",
      days: "2 Days / 1 Night",
      price: "₹4999"
    },
    {
      place: "Ooty",
      days: "2 Days / 1 Night",
      price: "₹5999"
    },
    {
      place: "Chikmagalur",
      days: "2 Days / 1 Night",
      price: "₹5499"
    },
    {
      place: "Goa",
      days: "3 Days / 2 Nights",
      price: "₹8999"
    },
    {
      place: "Kerala",
      days: "4 Days / 3 Nights",
      price: "₹12999"
    }
  ];

  return (
    <div className="tour-page">
      <h1>Popular Tour Packages</h1>

      <div className="tour-grid">

        {tours.map((tour) => (

    <div className="tour-card" key={tour.id}>

      <h2>{tour.place_name}</h2>

      <p>{tour.duration}</p>

      <h3>₹{tour.price}</h3>

      <button onClick={() => setShowModal(true)}>
  Book Tour
</button>

    </div>

  ))}
        {packages.map((tour, index) => (
          <div className="tour-card" key={index}>
            <h2>{tour.place}</h2>
            <p>{tour.days}</p>
            <h3>{tour.price}</h3>
            <button onClick={() => setShowModal(true)}>
  Book Tour
</button>
          </div>
        ))}
      </div>

      <BookingModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
/>
    </div>
  );
}

export default TourPackages;