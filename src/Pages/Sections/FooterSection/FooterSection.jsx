import React, { useState, useEffect, useRef } from "react";
import { CopiesContext } from "../../Context/Context";
import CopyRightSVG from "../../Components/CopyRight/CopyRight";
import "./FooterSection.scss";

class FooterSection extends React.Component {

  render(){
    const footerText = this.context.footer,
      socialMediaArray = this.context.socialMedia;

      console.log(socialMediaArray);
    return (
      <section className="footer-section">
        <div className="copyright-section">
          <p>
            { footerText.copyrightText }
            <span>
              <CopyRightSVG />
            </span>
            { footerText.yearWritten }
          </p>
        </div>
        <div className="social-media-section">
          {socialMediaArray.map((item, index) => (
            <a href={item.url}>
              <div className="social-media-item" style={{backgroundImage: `url('${item.logoUrl}')`}} key={`social-${index}`}></div>
            </a>
            ))
          }
        </div>
      </section>
    );
  }
};

FooterSection.contextType = CopiesContext;

export default FooterSection;
