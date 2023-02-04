import React, { useState, useEffect, useRef } from "react";
import { CopiesContext } from "../../Context/Context";
import CopyRightSVG from "../../Components/CopyRight/CopyRight";
import "./FooterSection.scss";

class FooterSection extends React.Component {

  render(){
    const footerText = this.context.footer;

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
        <div className="social-media-section"></div>
      </section>
    );
  }
};

FooterSection.contextType = CopiesContext;

export default FooterSection;
