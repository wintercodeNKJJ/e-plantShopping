import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">
        Welcome to Paradise Nursery, where nature meets tranquility!
      </p>
      <p className="about-us-content">
        Paradise Nursery is your trusted destination for premium plants that
        transform spaces and elevate wellbeing. We curate an extensive
        collection of plants across multiple categories—from air-purifying
        varieties that enhance indoor air quality to aromatic fragrant plants
        that engage your senses, insect-repellent varieties that protect your
        garden, medicinal plants that support natural wellness, and
        low-maintenance options perfect for busy lifestyles. Each plant is
        carefully selected to ensure it meets our rigorous quality standards and
        arrives at your doorstep in perfect condition.
      </p>
      <p className="plant_logo_left">
        <img
          src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg"
          height="50px"
          width="50px"
          alt="plant logo"
        />
      </p>
      <p className="about-us-content">
        Our expert team is committed to helping you discover the perfect plant
        for your lifestyle and space. Whether you're a seasoned horticulturist
        or a first-time plant parent, we provide comprehensive guidance,
        detailed care instructions, and personalized recommendations. Our
        knowledgeable staff is always ready to answer your questions and ensure
        you select plants that thrive in your specific environment and match
        your gardening goals.
      </p>
      <p className="plant_logo_right">
        <img
          src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg"
          height="50px"
          width="50px"
          alt=""
        />
      </p>

      <p className="about-us-content">
        Join Paradise Nursery in cultivating a greener future for our
        communities. Shop with us today and bring the transformative power of
        nature into your living spaces. Experience the joy of gardening, the
        beauty of thriving plants, and the peace that comes from connecting with
        the natural world.
      </p>
    </div>
  );
}

export default AboutUs;
