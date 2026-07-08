import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import car1 from "../assets/jeep1.jpg";
import car2 from "../assets/innova1.jpg";
import car3 from "../assets/dzire2.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Ajay Taxi Services</h1>
        <p>
          Your trusted travel partner in Bengaluru and across India.
        </p>
      </div>

      {/* Hero Slider */}
      
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="hero-slider"
            >
      
              <SwiperSlide>
                <div className="slide">
                  <img src={car1} alt="" />
                  <div className="slide-content">
                    <h1>Ajay Taxi Services</h1>
                    <p>Safe & Comfortable Travel Across India</p>
                  </div>
                </div>
              </SwiperSlide>
      
              <SwiperSlide>
                <div className="slide">
                  <img src={car2} alt="" />
                  <div className="slide-content">
                    <h1>Airport Pickup & Drop</h1>
                    <p>24/7 Reliable Taxi Service</p>
                  </div>
                </div>
              </SwiperSlide>
      
              <SwiperSlide>
                <div className="slide">
                  <img src={car3} alt="" />
                  <div className="slide-content">
                    <h1>Tour Packages</h1>
                    <p>Explore Bengaluru & India</p>
                  </div>
                </div>
              </SwiperSlide>
      
            </Swiper>

      <div className="about-content">
        <h2>Who We Are</h2>

        <p>
          Ajay Taxi Services is committed to providing safe, reliable,
          and affordable transportation solutions. We specialize in
          airport transfers, local city rides, outstation travel,
          tourist packages, corporate transportation, and family tours.
        </p>

        <p>
          With experienced drivers and well-maintained vehicles, we
          ensure every journey is comfortable and memorable.
        </p>
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h2>5000+</h2>
          <p>Successful Trips</p>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Professional Drivers</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            🚖
            <h3>Wide Vehicle Range</h3>
            <p>
              Cars, SUVs, Jeeps, Tempo Travellers and Buses.
            </p>
          </div>

          <div className="feature-card">
            👨‍✈️
            <h3>Professional Drivers</h3>
            <p>
              Experienced and courteous drivers for safe travel.
            </p>
          </div>

          <div className="feature-card">
            💰
            <h3>Affordable Pricing</h3>
            <p>
              Transparent pricing with no hidden charges.
            </p>
          </div>

          <div className="feature-card">
            ⭐
            <h3>Customer Satisfaction</h3>
            <p>
              Dedicated to delivering excellent service every trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;