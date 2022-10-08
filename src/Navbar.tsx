/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./shidoon-light-logo.jpg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<any>(null);
  const linksRef = useRef<any>(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" style={{ 
            width: "160px", height: "50px"
           }} />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
