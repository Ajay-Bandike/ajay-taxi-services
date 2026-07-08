import { useState } from "react";
import BookingModal from "../components/BookingModal";

function Fleet() {
  const [showModal, setShowModal] = useState(false);

  const vehicles = [
    {
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
      name: "Swift Dzire",
      seats: "4 Seater",
      type: "Sedan"
    },
    {
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      name: "Toyota Innova",
      seats: "7 Seater",
      type: "SUV"
    },
    {
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      name: "Mahindra Jeep",
      seats: "6 Seater",
      type: "Jeep"
    },
    {
      image: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2",
      name: "Tempo Traveller",
      seats: "12 Seater",
      type: "Traveller"
    }
  ];

  return (
    <div className="fleet-page">
      <h1>Our Vehicle Fleet</h1>

      <div className="fleet-grid">
        {vehicles.map((vehicle, index) => (
          <div className="fleet-card" key={index}>
            <img src={vehicle.image} alt={vehicle.name} />

            <h2>{vehicle.name}</h2>

            <p>{vehicle.type}</p>

            <p>{vehicle.seats}</p>

            <button onClick={() => setShowModal(true)}>
  Book Vehicle
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

export default Fleet;