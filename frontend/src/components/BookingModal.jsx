import { useState } from "react";
import axios from "axios";

function BookingModal({ isOpen, onClose }) {
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async () => {
  try {
    await axios.post(
      "http://localhost:5000/booking",
      booking
    );

    alert("Booking Request Submitted!");

    setBooking({
      name: "",
      phone: "",
      pickup: "",
      destination: "",
      date: "",
    });

    onClose();
  } catch (error) {
    console.error(error);
    alert("Booking Failed");
  }
};
   
  return (
    <div className="modal-overlay">
      <div className="booking-modal">

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>Book Your Ride</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={booking.name}
          onChange={(e) =>
            setBooking({ ...booking, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={booking.phone}
          onChange={(e) =>
            setBooking({ ...booking, phone: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Pickup Location"
          value={booking.pickup}
          onChange={(e) =>
            setBooking({ ...booking, pickup: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Destination"
          value={booking.destination}
          onChange={(e) =>
            setBooking({ ...booking, destination: e.target.value })
          }
        />

        <input
          type="date"
          value={booking.date}
          onChange={(e) =>
            setBooking({ ...booking, date: e.target.value })
          }
        />

        <button
          className="booking-submit"
          onClick={handleSubmit}
        >
          Confirm Booking
        </button>

      </div>
    </div>
  );
}

export default BookingModal;