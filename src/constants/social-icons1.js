import React from "react"
import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa"
export default [
  {
    id: Math.random(),
    icon: <FaFacebook className="facebook-icon" />,
    url: "https://facebook.com/?lang=en",
  },
  {
    id: Math.random(),
    icon: <FaPinterest className="pinterest-icon" />,
    url: "https://www.pinterest.com/",
  },
  {
    id: Math.random(),
    icon: <FaInstagram className="instagram-icon" />,
    url: "https://www.instagram.com/?hl=en",
  },
]
