import React from "react";
import "./ContactUs.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Container } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Container>
        <div>
          <div className="maininfocontact">
            <h1 className="contuctusintro">
              Contact Winchester Repeating Arms
            </h1>
            <p className="contactcontent">
              <span className="bold">Try our FAQ Database.</span> Feel free to
              contact us with the information below. But you will want to first
              take a few seconds to look over our "
              <a
                className="questions"
                target="_blank"
                href="https://www.winchesterguns.com/support/faq.html"
              >
                Frequently Asked Questions
              </a>
              " section and see if the answer resides there. Use the FAQ list,
              the FAQ search function or the main site search function (located
              at the top left of every page) to try and locate the information
              you are looking for.
            </p>
            <p className="contactcontent">
              <span className="bold">Winchester Ammunition Questions:</span>
              Ammunition questions can be answered by visiting "
              <a
                className="questions"
                target="_blank"
                href="https://winchester.com/"
              >
                " Winchester Ammunition's website
              </a>
              or by using the
              <a
                href="https://winchester.com/Support/Customers/Contact-Us"
                target="_blank"
                className="questions"
              >
                ammunition contact form.
              </a>
            </p>
            <p className="contactcontent">
              <span className="bold">
                All other Winchester products (non-firearms): "
              </span>
              <a
                href="https://winchester.com/Products/Shop/Merchandise"
                target="_blank"
                className="questions"
              >
                All Winchester product information can be found here
              </a>
              "
            </p>
            <p className="contactcontent">
              <span className="bold">
                Winchester Repeating Arms Questions (firearms):
              </span>
              If your question hasn't been answered in the "
              <a
                className="questions"
                target="_blank"
                href="https://www.winchesterguns.com/support/faq.html"
              >
                Frequently Asked Questions
              </a>
              " and it is a question about manuals, catalogs or products please
              call our Customer Service Department at: 800-333-3288. For Parts &
              Service call: 800-322-4626
            </p>
            <p className="contactcontent">
              <span className="bold">
                Winchester Repeating Arms Customer Service E-Mail Address
                (firearms).
              </span>
              Before emailing us, please take a look at our "
              <a
                className="questions"
                target="_blank"
                href="https://www.winchesterguns.com/support/faq.html"
              >
                Frequently Asked Questions
              </a>
              " which provides answers to commonly asked questions. If you still
              have a question please e-mail us.
            </p>
          </div>
          <div>
            <p className="comandsug">Comments and Suggestions Policy</p>
            <p>
              Winchester Repeating Arms is always pleased to receive your
              comments and suggestions about the products and services we
              provide. However, any information you provide through this
              website, letters, telephone calls, any Winchester Repeating Arms
              e-mail address or any other means whatsoever, including but not
              limited to ideas, suggestions, notes, drawings, concepts or other
              information, will be considered non-confidential and the property
              of Winchester Repeating Arms. Winchester Repeating Arms may use
              any and all submissions without restriction.
            </p>
          </div>
          <h2 className="contuctusintro">Our Social Media</h2>
          <div className="contacticons">
            <a
              href="https://www.youtube.com/@WinchesterRepeatingArms"
              className="icons"
              target="_blank"
            >
              <YouTubeIcon sx={{ fontSize: "50px" }} /> Youtube
            </a>
            <div>
              <a
                href="https://www.instagram.com/winchesterrepeatingarms/"
                className="icons"
                target="_blank"
              >
                <InstagramIcon sx={{ fontSize: "50px" }} />
                Instagram
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/winreparms"
                className="icons"
                target="_blank"
              >
                <TwitterIcon sx={{ fontSize: "50px" }} />
                Twitter
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/winchesterrepeatingarms/"
                className="icons"
                target="_blank"
              >
                <FacebookIcon sx={{ fontSize: "50px" }} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </Container>
      ;
    </>
  );
};

export default ContactUs;
