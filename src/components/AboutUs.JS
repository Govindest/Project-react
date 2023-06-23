import React from 'react';
import './AboutUs.css'; // Import a new css file for the AboutUs page

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to our example e-commerce store. We strive to provide the best products and service to our customers.</p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Quality:</strong> We never compromise on the quality of our products.</li>
        <li><strong>Service:</strong> Customer satisfaction is our top priority.</li>
        <li><strong>Integrity:</strong> We believe in doing business with honesty and transparency.</li>
      </ul>
      <h2>Our Team</h2>
      <p>Our team is dedicated to ensuring that every customer is satisfied with their shopping experience. We're passionate about what we do and we're here to help with any questions or concerns you may have.</p>
    </div>
  );
}

export default AboutUs;
