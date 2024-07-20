import React from "react";
import "./about.css";
import storeImage from "../../assets/speakerstore.png";
import bangandolufsen from "../../assets/blog/bangandolufsenforferrari.png";
import jblflip5 from "../../assets/jblflip5.png";
import bosesoundlink from "../../assets/bosesoundlink.png";

const About = () => {
  const blogItems = [
    {
      category: "COLLABORATION",
      title: "BANG & OLUFSEN FOR FERRARI",
      description:
        "Bang & Olufsen's collaboration with Ferrari sparks a high-octane special collection that looks as good as it sounds where our shared...",
      image: bangandolufsen,
    },
    {
      category: "NEWS",
      title: "MUCH MORE THAN A PIXEL ART BLUETOOTH SPEAKER",
      description:
        "Divoom's known for their extremely trendy and retro-looking products...",
      image: jblflip5,
    },
    {
      category: "NEWS",
      title: "BOSE INTRODUCES THE NEW SMART SOUNDBAR 600",
      description:
        "Bose announces the new Smart Soundbar 600 — a small, sleek soundbar that...",
      image: bosesoundlink,
    },
    {
      category: "NEWS",
      title: "JBL'S LUXURY HOME AUDIO SERIES",
      description:
        "Introducing the Icons of JBL's Luxury Home Audio series, featuring the JBL...",
      image: "path/to/your/image4.png",
    },
  ];
  return (
    <div className="about-us-page-container">
      <div className="about-page-container">
        <h1 className="about-page-header">ABOUT SPEAKERHAVEN</h1>
        <p className="about-page-description">
          SpeakerHaven is your ultimate audio destination. With years of
          expertise, we've become the go-to choice for sound enthusiasts and
          professionals. Our mission is to provide high quality speakers and
          audio gear to elevate your audio experience.
        </p>
        <div className="about-page-image-container">
          <img
            src={storeImage}
            alt="Speaker Store"
            className="about-page-image"
          />
          <p className="about-page-image-content">
            YOUR JOURNEY TO AUDIO PERFECTION BEGINS AT SPEAKERHAVEN STORES. FIND
            YOUR CLOSEST LOCATION AND LET US ELEVATE YOUR AUDIO EXPERIENCE
            TODAY.
          </p>
          <button className="about-page-image-find-store-button">
            FIND STORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
