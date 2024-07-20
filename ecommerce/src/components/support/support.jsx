import React from "react";
import "./support.css";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbBasketQuestion } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";

const Support = () => {
  return (
    <div className="support-page-container">
      <div className="support-container">
        <h1 className="support-header">Hello, How can we help you?</h1>
        <div className="support-problem-input-container">
          <input
            type="text"
            placeholder="Ask a Question ..."
            className="support-problem-input"
          />
          <button className="support-problem-input-search-button">
            SEARCH
          </button>
        </div>
        <p className="support-page-sub-header">
          Or choose a category to quickly find the help you need
        </p>
        <div className="support-page-category-container">
          <div className="support-page-category">
            <CiFlag1 className="support-icon" />
            Getting Started
          </div>
          <div className="support-page-category">
            <MdOutlinePriceChange className="support-icon" />
            Pricing & Plans
          </div>
          <div className="support-page-category">
            <TbBasketQuestion className="support-icon" />
            Property Question
          </div>
          <div className="support-page-category">
            <IoBookOutline className="support-icon" />
            Usage Guide
          </div>
        </div>
        <div className="faq-container">
          <h1 className="faq-header">Frequently Asked Questions</h1>
          <div className="faq-item">
            <div className="faq-question">
              1. What types of speakers do you sell?
            </div>
            <div className="faq-answer">
              We offer a wide range of speakers, including portable Bluetooth
              speakers, home audio speakers, smart speakers, soundbars, and
              professional audio equipment.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              2. How can I choose the right speaker for my needs?
            </div>
            <div className="faq-answer">
              You can use our filter options to narrow down your search based on
              your preferences, such as usage (home, outdoor, professional),
              connectivity (Bluetooth, Wi-Fi, wired), and features (smart
              capabilities, waterproof, etc.). Additionally, you can read
              customer reviews and product descriptions for more information.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              3. Do you offer warranties on your speakers?
            </div>
            <div className="faq-answer">
              Yes, all our speakers come with a manufacturer’s warranty. The
              duration and coverage of the warranty depend on the brand and
              model. Specific warranty details are available on each product
              page.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">4. What is your return policy?</div>
            <div className="faq-answer">
              We offer a 30-day return policy on all our speakers. If you are
              not satisfied with your purchase, you can return the product in
              its original condition within 30 days for a full refund or
              exchange. Please refer to our return policy page for more details.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              5. How long will it take for my order to arrive?
            </div>
            <div className="faq-answer">
              Shipping times vary based on your location and the shipping method
              selected at checkout. Typically, standard shipping takes 3-7
              business days. Expedited shipping options are also available for
              faster delivery.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              6. Do you offer international shipping?
            </div>
            <div className="faq-answer">
              Yes, we do offer international shipping. Shipping rates and
              delivery times vary depending on the destination country. Please
              check our shipping policy page for more information on
              international shipping.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">7. Can I track my order?</div>
            <div className="faq-answer">
              Yes, once your order has been shipped, you will receive a tracking
              number via email. You can use this tracking number to monitor the
              status of your delivery on the courier’s website.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              8. What payment methods do you accept?
            </div>
            <div className="faq-answer">
              We accept a variety of payment methods, including major credit
              cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.
              We also offer financing options through our partnership with
              several financing companies.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              9. How can I contact customer support?
            </div>
            <div className="faq-answer">
              You can reach our customer support team via email at
              support@oursite.com, or by calling our toll-free number at
              1-800-123-4567. Our support hours are Monday to Friday, 9 AM to 6
              PM EST.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              10. Are there any ongoing promotions or discounts?
            </div>
            <div className="faq-answer">
              We frequently run promotions and offer discounts on select
              products. To stay updated on our latest offers, subscribe to our
              newsletter or check our promotions page regularly.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              11. Can I get a demo of the speakers before buying?
            </div>
            <div className="faq-answer">
              Yes, we offer virtual demos and in-store demos at our partner
              locations. Please contact our customer support team to schedule a
              virtual demo or to find the nearest store offering demos.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              12. Do you provide installation services?
            </div>
            <div className="faq-answer">
              We offer installation services for certain types of speakers, such
              as home theater systems and professional audio equipment. Please
              contact our customer support team for more information and to
              schedule an installation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
