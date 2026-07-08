import axios from "axios";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitData = async () => {
    await axios.post("http://localhost:5000/contact", form);
    alert("Message Sent Successfully!");
  };

  return (
    <div>
      {/* Intro Section */}

      <div className="contact-intro">
        <h1>Ajay Taxi Services</h1>

        <p>
          Thank you for choosing Ajay Taxi Services. We provide reliable,
          comfortable, and affordable taxi services across Bengaluru and
          throughout India.
        </p>

        <p>
          Whether you need airport transfers, outstation trips, tourist
          packages, corporate travel, or family tours, we are here to help.
        </p>
      </div>

      {/* Taxi Animation */}

        <div className="car-container">
            <div className="car-animation">🚖</div>
        </div>

      {/* Contact Form */}

      <div className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <textarea
          placeholder="Message"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button onClick={submitData}>
          Send Message
        </button>
      </div>

      {/* Thank You Section */}

      <div className="thank-you">
        <h2>🙏 Thank You for Visiting!</h2>

        <p>
          We appreciate your interest in Ajay Taxi Services.
          We look forward to serving you and making your journey
          safe, comfortable, and memorable.
        </p>
      </div>
    </div>
  );
}

export default Contact;