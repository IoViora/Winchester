import { Container } from "@mui/material";
import React from "react";
import "./AboutUs.css";
import image from "../../images/oliverWinchester.jpg";
import image2 from "../../images/m1866.jpg";
const AboutUs = () => {
  return (
    <>
      <Container>
        <div className="aboutus">
          <h2 className="aboutusintro">150 Years of Winchester</h2>{" "}
          <div className="aboutUsfirst">
            <p className="aboutuscontent firstp">
              <span className="firstspan">
                The Winchester Repeating Arms Company was a prominent American
                manufacturer of repeating firearms and ammunition.
              </span>
              The firm was established in 1866 by Oliver Winchester and was
              located in New Haven, Connecticut. The firm went into receivership
              in 1931 and was bought by the Western Cartridge Company, a
              forerunner of the Olin Corporation. The Winchester brand name is
              still owned by the Olin Corporation, which makes ammunition under
              that name. The Winchester name is also used under license for
              firearms produced by two subsidiaries of the Herstal Group – FN
              Herstal of Belgium and the Browning Arms Company of Ogden, Utah.
            </p>
            <img className="oliverW" src={image} alt="" />
          </div>
          <div>
            <div className="aboutUsMiddle">
              <p className="aboutuscontent">
                The ancestor of the Winchester Repeating Arms Company was the
                Horace Smith and Daniel Wesson partnership of Norwich,
                Connecticut . Smith and Wesson acquired Lewis Jennings' improved
                version of inventor Walter Hunt's 1848 "Volition Repeating
                Rifle" and its caseless "Rocket Ball" ammunition, which had been
                produced in small numbers by Robbins & Lawrence of Windsor,
                Vermont. Jennings' rifle was a commercial failure, and Robbins &
                Lawrence ceased production in 1852. Smith designed a
                much-improved rifle based on Jennings' design, and the partners
                also hired away Robbins & Lawrence shop foreman Benjamin Tyler
                Henry.
              </p>

              <p className="aboutuscontent">
                In 1855, the Smith and Wesson partnership, in order to
                manufacture what they called the "Volcanic" lever-action rifle
                and pistol, sought investors and incorporated as the Volcanic
                Repeating Arms Company. Its largest stockholder was clothing
                manufacturer Oliver Winchester.The Volcanic rifle had only
                limited success. The company moved to New Haven in 1856, but by
                the end of that year, it became insolvent. Oliver Winchester and
                his partner John M. Davies purchased the bankrupt firm's assets
                from the remaining stockholders and reorganized it as the New
                Haven Arms Company in April 1857.
              </p>
            </div>

            <p className="aboutuscontent">
              After Smith's departure, Benjamin Henry continued to work with a
              Smith development project, the self-contained metallic rimfire
              cartridge, and perfected the much larger, more powerful .44 Henry
              round. Henry also supervised a new rifle design based loosely on
              the Volcanic to use the new ammunition, retaining only the general
              form of the breech mechanism and the tubular magazine. This became
              the Henry rifle of 1860, which was manufactured by the New Haven
              Arms Company and used in considerable numbers by certain Union
              army units during the American Civil War. The Henry rifle ensured
              New Haven Arms' success, and together with the Spencer rifle,
              established the lever-action repeater in the firearms market
            </p>
            <img className="firstrifle" src={image2} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
