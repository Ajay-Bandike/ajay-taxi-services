import { useEffect, useState } from "react";
import axios from "axios";
import BookingModal from "../components/BookingModal";

function Services() {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {

  axios
    .get("http://localhost:5000/vehicles")
    .then((res) => {
      setVehicles(res.data);
    })
    .catch((err) => console.log(err));

}, []);
  return (
    <div className="services-page">

      <div className="services-hero">
        <h1>Taxi Services & Pricing</h1>
        <p>
          Affordable and comfortable rides across Bengaluru and India.
        </p>
      </div>

      {/* Sedan Section */}

      <section className="vehicle-section">
        <h2>🚖 Sedan Cars</h2>

        <div className="services-grid">

          {vehicles.map((vehicle) => (

    <div className="service-card" key={vehicle.id}>

      <h3>{vehicle.vehicle_name}</h3>

      <p>{vehicle.vehicle_type}</p>

      <p>{vehicle.seats} Seater</p>

      <h4>₹{vehicle.price_per_km}/km</h4>

      <button onClick={() => setShowModal(true)}>
  Book Now
</button>

    </div>

  ))}

          <div className="service-card">
            <h3>Swift Dzire</h3>
            <p>4 Seater</p>
            <h4>₹13/km</h4>
<button onClick={() => setShowModal(true)}>
  Book Now
</button>          </div>

          <div className="service-card">
            <h3>Toyota Etios</h3>
            <p>4 Seater</p>
            <h4>₹14/km</h4>
<button onClick={() => setShowModal(true)}>
  Book Now
</button>          </div>

        </div>
      </section>

      {/* SUV Section */}

      <section className="vehicle-section">
        <h2>🚙 SUV Vehicles</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Innova Crysta</h3>
            <p>7 Seater</p>
            <h4>₹18/km</h4>
            <button onClick={() => setShowModal(true)}>
  Book Now
</button>
          </div>

          <div className="service-card">
            <h3>Ertiga</h3>
            <p>6 Seater</p>
            <h4>₹16/km</h4>
<button onClick={() => setShowModal(true)}>
  Book Now
</button>          </div>

        </div>
      </section>

      {/* Jeep Section */}

      <section className="vehicle-section">
        <h2>🚜 Jeep Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Mahindra Jeep</h3>
            <p>6 Seater</p>
            <h4>₹17/km</h4>
            <button onClick={() => setShowModal(true)}>
  Book Now
</button>
          </div>

        </div>
      </section>

      {/* Traveller Section */}

      <section className="vehicle-section">
        <h2>🚌 Tempo Traveller</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Tempo Traveller</h3>
            <p>12 Seater</p>
            <h4>₹25/km</h4>
            <button onClick={() => setShowModal(true)}>
  Book Now
</button>
          </div>

          <div className="service-card">
            <h3>Luxury Traveller</h3>
            <p>17 Seater</p>
            <h4>₹30/km</h4>
            <button onClick={() => setShowModal(true)}>
  Book Now
</button>
          </div>

        </div>
      </section>

      {/* Bus Section */}

      <section className="vehicle-section">
        <h2>🚍 Bus Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Mini Bus</h3>
            <p>24 Seater</p>
            <h4>₹40/km</h4>
            <button onClick={() => setShowModal(true)}>
  Book Now
</button>
          </div>

          <div className="service-card">
            <h3>Luxury Bus</h3>
            <p>40 Seater</p>
            <h4>₹55/km</h4>
            <button onClick={() => setShowModal(true)}>
  Book Now
</button>
          </div>

        </div>
      </section>

      <BookingModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
/>

    </div>
  );
}

export default Services;