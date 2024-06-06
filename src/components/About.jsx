import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        We take the guesswork out of dining by offering expertly curated meal options that cater to every palate.
         Whether you're in the mood for a hearty comfort dish, a gourmet feast, or an exotic culinary adventure, we've got you covered. 
         Let us help you discover the perfect meal that delights your taste buds and elevates your dining experience. 
         Savor every bite and make each meal a memorable one with our top picks!
         </p>
        <p>
        Dive into a seamless food journey where each recommendation is a celebration of flavor and quality. 
        Trust us to guide you to meals that not only satisfy but also inspire, making every dining moment extraordinary.

        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
