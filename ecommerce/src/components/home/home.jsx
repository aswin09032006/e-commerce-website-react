import React, { useRef, useState } from "react";
import "./home.css";
import speaker from "../../assets/sonosspeaker1.png";
import Navbar from "../utils/navbar/navbar";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "../utils/card/card";
import image from "../../assets/hero-image.png";
import beosound from "../../assets/beosound2.png";
import soundlink from "../../assets/soundlinkresolve2.png";
import beolab19 from "../../assets/beolab19.png";
import sonosone from "../../assets/sonosone.png";
import bosesoundlink from "../../assets/bosesoundlink.png";
import jblflip5 from "../../assets/jblflip5.png";
import soundlinkresolve2 from "../../assets/soundlinkresolve2.png";
import beosound2 from "../../assets/beosound2.png";
import beosounda1 from "../../assets/beosounda1/image1.png";

const SCROLL_WIDTH = 800;

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="landing-page-container">
      <Navbar />
      <div className="home-page-container">
        <img src={speaker} className="speaker-image" alt="Speaker" />
        <div className="home-page-hero-text">
          <h1>EXPERIENCE BOLD, PORTABLE SOUND FOR YOUR JOURNEY</h1>
        </div>
        <div className="sonos-text">
          <div className="left">
            <h3 className="sonos-text-header">SONOS</h3>
            <p className="sonos-text-move">Move</p>
            <p className="sonos-text-description">
              Get bold sound that moves you and moves with you with this
              powerful, durable, and versatile smart speaker.
            </p>
            <a href="/product-overview">
              <button className="bn54">
                <span className="bn54span">BUY NOW</span>
              </button>
            </a>
          </div>
          <div className="right">
            <p>
              <CiDeliveryTruck className="right-icon" />
              Delivery guaranteed
            </p>
            <p>
              <MdOutlineVerifiedUser className="right-icon" />
              Safe & reliable payment
            </p>
            <p>
              <RiCustomerServiceFill className="right-icon" />
              24/7 Customer service
            </p>
          </div>
        </div>
      </div>
      <div className="scrolling-cards-container">
        <h1 className="scrolling-cards-header">BEST SELLER PRODUCT</h1>
        <p className="scrolling-cards-description">
          Browse the best of our favourite sale styles and brands
        </p>
        <div
          className="scrolling-cards"
          ref={containerRef}
          style={{
            width: "1200px",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
        >
          <Card img={speaker} price="89.9" title="DITOO-PRO" />
          <Card img={beolab19} price="4750.0" title="BEOLAB 19" />
          <Card img={sonosone} price="299.0" title="SONOS ONE" />
          <Card img={bosesoundlink} price="199.0" title="BOSE SOUNDLINK" />
          <Card img={jblflip5} price="350.0" title="JBL FLIP 5" />
          <Card img={speaker} price="89.9" title="DITOO-PRO" />
          <Card img={beolab19} price="4750.0" title="BEOLAB 19" />
          <Card img={sonosone} price="299.0" title="SONOS ONE" />
          <Card img={bosesoundlink} price="199.0" title="BOSE SOUNDLINK" />
          <Card img={jblflip5} price="350.0" title="JBL FLIP 5" />
        </div>
        <div className="scroll-buttons">
          <button onClick={() => handleScroll(-SCROLL_WIDTH)}>
            <FaChevronLeft />
          </button>
          <button onClick={() => handleScroll(SCROLL_WIDTH)}>
            <FaChevronRight />
          </button>
        </div>
        <button className="explore-more-button">EXPLORE MORE</button>
      </div>
      <div className="latest-products-container">
        <h1 className="latest-product-header">LATEST PRODUCT</h1>
        <p className="latest-product-description">
          Elevate your audio world with our newest release
        </p>
        <div className="latest-product-images">
          <div className="latest-product-hero-image-container">
            <img
              src={image}
              alt="Hero product"
              className="latest-product-hero-image"
            />
            <div className="latest-product-hero-text">
              <p className="latest-product-hero-title">TEENAGE ENGINEERING</p>
              <h3 className="latest-product-hero-subtitle">OD-11</h3>
              <p className="latest-product-hero-description">
                Wireless stereo loudspeaker with Carlsson sound, now in black
                and white
              </p>
              <h1 className="latest-product-hero-price">$999.0</h1>
              <button className="latest-product-hero-buy-button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="latest-product-subhero-image-container">
            <div className="latest-product-side-image-container">
              <div className="latest-product-side-image-content">
                <img
                  src={beosound}
                  className="latest-product-side-image"
                  alt="Beosound"
                />
              </div>
              <button className="latest-product-side-cart-button">
                <FaCartShopping />
              </button>
              <button className="latest-product-side-buy-button">
                BUY NOW
              </button>
              <div className="latest-product-side-text">
                <div className="latest-product-side-title-container">
                  <div className="side-title-title">
                    <p className="latest-product-side-title">BANG & OLUFSEN</p>
                    <h3 className="latest-product-side-subtitle">BEOSOUND 2</h3>
                  </div>
                  <h1 className="latest-product-side-price">$3199.0</h1>
                </div>
              </div>
            </div>
            <div className="latest-product-side-image-container">
              <div className="latest-product-side-image-content">
                <img
                  src={soundlink}
                  className="latest-product-side-image"
                  alt="Soundlink"
                />
              </div>
              <button className="latest-product-side-cart-button">
                <FaCartShopping />
              </button>
              <button className="latest-product-side-buy-button">
                BUY NOW
              </button>
              <div className="latest-product-side-text">
                <div className="latest-product-side-title-container">
                  <div className="side-title-title">
                    <p className="latest-product-side-title">BOSE</p>
                    <h3 className="latest-product-side-subtitle">
                      SOUNDLINK RESOLVE+ II
                    </h3>
                  </div>
                  <h1 className="latest-product-side-price">$329.0</h1>
                </div>
              </div>
            </div>
          </div>
          <button className="explore-more-button">EXPLORE MORE</button>
        </div>
      </div>
      <div className="category-page-container">
        <div className="categories-container">
          <h1 className="categories-header">CATEGORIES</h1>
          <div className="categories-image-container">
            <div className="category-item">
              <img src={jblflip5} alt="Speakers" className="category-image" />
              <div className="category-label">SPEAKERS</div>
            </div>
            <div className="category-item">
              <img
                src={soundlinkresolve2}
                alt="Portable Speakers"
                className="category-image"
              />
              <div className="category-label">PORTABLE SPEAKERS</div>
            </div>
            <div className="category-item">
              <img
                src={beosound2}
                alt="Home Theater"
                className="category-image"
              />
              <div className="category-label">HOME THEATER</div>
            </div>
            <div className="category-item">
              <img
                src={beosounda1}
                alt="Speaker Sets"
                className="category-image"
              />
              <div className="category-label">SPEAKER SETS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-container">
        <h1 className="newsletter-header">SUBSCRIBE TO OUR EMAIL</h1>
        <p className="newsletter-description">
          BE THE FIRST TO KNOW ABOUT NEW COLLECTIONS AND EXCLUSIVE OFFERS
        </p>
        <div className="newsletter-email-input-container">
          <input
            type="text"
            placeholder="youremail@example.com"
            className="newsletter-email-input"
          />
          <button className="newsletter-email-input-subscribe-button">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} SpeakerHaven. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
