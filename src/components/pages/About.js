import React from "react";
import "../../App.css";
import "../../styles/css/About.css";

export default function About() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="about-us__wrapper">
        <div className="about-us__description">
          <p>
            <span>Company Overview:</span>
            Binary Anvil East is an ecommerce development
            company established in 2010 and is currently based in Bacolod City,
            Negros Island. We solely use Magento 1 and Magento 2 as our
            ecommerce platforms in delivering high quality websites to our
            clients around the world. We are the premier web development company
            based on the city with ever-growing career opportunities for
            like-minded professionals that share interests in the online
            business presence. We strive to be the best, while maintaining a fun
            environment with collaborative peer dynamic that encourages
            professional growth and passion cultivation. We have an awesome
            office conducive for productivity, and a great team ready to mold
            you to the best that you can offer.
          </p>
          <p>Why join us?</p>
          <ul>
            <li>We are an established company. Compared with start-up companies, your job security is not even a question.</li>
            <li>We recognize talented and hardworking people. Quick career growth is not a question when proven and regardless of longevity.</li>
            <li>We train all our employees before regularization. Do not worry if you apply with little to no knowledge with the platforms we’re using.</li>
            <li>Above average health insurance coverage, better than even the biggest companies in the city could offer.</li>
            <li>Paid time off and accumulating time off based on tenure.</li>
            <li>Office space conducive for healthy and fun work environment</li>
          </ul>
        </div>
        <div>Instagram section</div>
      </div>
    </div>
  );
}
