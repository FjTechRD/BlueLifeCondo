import React from "react";
import "../css/components/SocialMedia.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function SocialMedia() {
  const platforms = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/bluelife",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bluelife",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/bluelife",
      icon: <FaTwitter />,
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/16465231968",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <div className="social-media">
      {platforms.map(({ name, url, icon }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={name}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
