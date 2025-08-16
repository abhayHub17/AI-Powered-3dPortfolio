import React from "react";
import { socialImgs } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-container ">
        <div className="socials ">
          {socialImgs.map((social) => (
            <a className="icon" target="_blank" href={social.url}>
              <img
                src={social.imgPath}
                alt={social.name}
                className="w-5 cursor-pointer"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Abhayjeet Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
