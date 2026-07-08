import innova from "../assets/innova.jpeg";
import dzire from "../assets/dzire.jpg";
import traveller from "../assets/traveller.jpeg";
import jeep from "../assets/jeep.jpg";

import mysore1 from "../assets/mysore1.jpg";
import mysore2 from "../assets/mysore2.jpg";
import mysore3 from "../assets/mysore3.jpg";

import coorg1 from "../assets/coorg1.jpg";
import coorg2 from "../assets/coorg2.jpg";
import coorg3 from "../assets/coorg3.jpg";

import ooty1 from "../assets/ooty1.jpg";
import ooty2 from "../assets/ooty2.jpg";
import ooty3 from "../assets/ooty3.jpg";

function Home() {
  return (
    <div className="home-container">

      <div className="hero-section">
        <h1>Ajay Taxi Services</h1><br />

        <p>
          Premium taxi services across Bengaluru and throughout India.
          Comfortable rides, professional drivers and unforgettable journeys.
        </p>
      </div>

      {/* 1 */}

      <section className="car-section">

        <div className="car-image">
          <img src={innova} alt="Innova" />
        </div>

        <div className="car-content">
          <h2>TOYOTA INNOVA CRYSTA</h2>

          <p>
            The Innova Crysta is perfect for family vacations,
            corporate travel, and long-distance journeys. With
            spacious seating, premium comfort, and excellent
            safety features, it remains one of the most preferred
            travel vehicles in India.
          </p>

          <ul>
            <li>✓ 7 Seater</li>
            <li>✓ AC Vehicle</li>
            <li>✓ Premium Interior</li>
            <li>✓ Long Distance Comfort</li>
          </ul>
        </div>

      </section>

      {/* 2 */}

      <section className="car-section reverse">

        <div className="car-image">
          <img src={dzire} alt="Dzire" />
        </div>

        <div className="car-content">
          <h2>SWIFT DZIRE</h2>

          <p>
            Swift Dzire offers a smooth and economical travel
            experience for airport transfers, city rides, and
            business trips. Its modern design and fuel efficiency
            make it a favorite choice among travelers.
          </p>

          <ul>
            <li>✓ 4 Seater</li>
            <li>✓ Fuel Efficient</li>
            <li>✓ Comfortable Ride</li>
            <li>✓ Affordable Pricing</li>
          </ul>
        </div>

      </section>

      {/* 3 */}

      <section className="car-section">

        <div className="car-image">
          <img src={traveller} alt="Traveller" />
        </div>

        <div className="car-content">
          <h2>TEMPO TRAVELLER</h2>

          <p>
            Designed for group tours and family outings, our
            Tempo Traveller ensures a comfortable journey for
            larger groups visiting tourist destinations.
          </p>

          <ul>
            <li>✓ 12-17 Seater</li>
            <li>✓ Tourist Packages</li>
            <li>✓ Group Travel</li>
            <li>✓ Spacious Seats</li>
          </ul>
        </div>

      </section>

      {/* 4 */}

      <section className="car-section reverse">

        <div className="car-image">
          <img src={jeep} alt="Jeep" />
        </div>

        <div className="car-content">
          <h2>MAHINDRA JEEP</h2>

          <p>
            Ideal for adventurous road trips and hill station
            tours. The Mahindra Jeep combines rugged performance
            with passenger comfort for memorable journeys.
          </p>

          <ul>
            <li>✓ Adventure Trips</li>
            <li>✓ Hill Stations</li>
            <li>✓ Powerful Engine</li>
            <li>✓ Comfortable Seating</li>
          </ul>
        </div>
      </section>
      <section className="destinations-section">

  <h1>Popular Destinations</h1>

  <p className="destination-subtitle">
    Explore the most loved tourist destinations with Ajay Taxi Services.
  </p>

  {/* Mysore */}

  <div className="destination-card">

    <div className="circle-gallery">

      <img src={mysore1} alt="" />
      <img src={mysore2} alt="" />
      <img src={mysore3} alt="" />

    </div>

    <div className="destination-content">

      <h2>Mysore</h2>

      <p>
        Famous for Mysore Palace, Brindavan Gardens and
        rich cultural heritage. Perfect for a one-day family trip
        from Bengaluru.
      </p>

    </div>

  </div>

  {/* Coorg */}

  <div className="destination-card reverse">

    <div className="circle-gallery">

      <img src={coorg1} alt="" />
      <img src={coorg2} alt="" />
      <img src={coorg3} alt="" />

    </div>

    <div className="destination-content">

      <h2>Coorg</h2>

      <p>
        Known for coffee plantations, waterfalls and misty hills.
        A paradise for nature lovers and weekend travelers.
      </p>

    </div>

  </div>

  {/* Ooty */}

  <div className="destination-card">

    <div className="circle-gallery">

      <img src={ooty1} alt="" />
      <img src={ooty2} alt="" />
      <img src={ooty3} alt="" />

    </div>

    <div className="destination-content">

      <h2>Ooty</h2>

      <p>
        Queen of hill stations. Enjoy scenic views,
        botanical gardens and pleasant weather throughout the year.
      </p>

    </div>
    

  </div>
  
  

</section>

<footer className="footer">

  <div className="footer-container">

    <div className="footer-section">
      <h2>Ajay Taxi Services</h2>

      <p>
        Providing reliable taxi services across Bengaluru and
        all over India. Comfortable rides, experienced drivers,
        and memorable journeys.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>

      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Fleet</li>
        <li>Tour Packages</li>
        <li>Contact</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Popular Destinations</h3>

      <ul>
        <li>Mysore</li>
        <li>Coorg</li>
        <li>Ooty</li>
        <li>Chikmagalur</li>
        <li>Goa</li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact Information</h3>

      <p>📍 Bengaluru, Karnataka</p>
      <p>📞 +91 ##########</p>
      <p>✉️ info@ajaytaxi.com</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Ajay Taxi Services. All Rights Reserved.
  </div>

</footer>

    </div>

    

    
  );
  
}



export default Home;