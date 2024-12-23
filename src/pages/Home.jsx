import React from "react";
import "../css/pages/Home.css";
import VideoBackground from "../components/Home/VideoBackground";
import ApartmentCards from "../components/Home/ApartmentCards";
import AmenitiesSection from "../components/Home/AmenitiesSection";
import LocationSectionHome from "../components/Home/LocationSectionHome";
import CallToAction from "../components/Home/CallToAction";
import Testimonials from "../components/Home/Testimonials";

function Home() {
  return (
    <div>
      <VideoBackground />
      <ApartmentCards />
      <AmenitiesSection />
      <LocationSectionHome />
      <CallToAction />
      <Testimonials />
    </div>
  );
}
export default Home;
