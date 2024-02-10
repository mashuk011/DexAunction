import React from "react";

const ContactComp = () => {
  return (
    <>
      <section className="contact-comp">
        <div className="common-container">
          <button className="why-dex-aunction-label-bx ">
            <span>Contact Us?</span>
          </button>

          <div className="global-market-size-info-flex-bx contact-text-flex-bx">
            <h3>We’re here when you need us</h3>

            <p>
              Please leave us a message. Our team will contact you as soon as
              possible.
            </p>
          </div>

          <div className="contact-grid grid grid-two-col gap">
            <div className="left-contact-info">
              <div className="cont-det-bx">
                <span>Address</span>
                <p>Dex Auction Inc</p>
                <p>
                  Ground Floor, The Sotheby Building, Rodney Village, Rodney
                  Bay, Gros Islet, Saint Lucia
                </p>
              </div>

              <div className="cont-det-bx">
                <span>Phone</span>
                <p>+91 887-554-4546</p>
              </div>

              <div className="cont-det-bx">
                <span>Need Help?</span>
                <p>contact@dex.auction</p>
              </div>
            </div>

            <div className="right-cont-form">
              <span>Contact Form</span>

              <div className="cont-inpt-bx">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name*"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="cont-inpt-bx">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email*"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="cont-inpt-bx">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Your Subject*"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="cont-mesage-bx">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Your message*"
                ></textarea>
              </div>

              <div className="form-check-bx">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <span>
                  Yes, I agree to receive occasional information from DexAuction
                  about their products and services or with other content that
                  may be of interest to me.
                </span>
              </div>

              <button className="cont-form-btn">
                Send
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactComp;
