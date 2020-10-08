import React from "react"
import {
  FaHome,
  FaAddressCard,
  FaBriefcase,
  FaPencilRuler,
  FaUserGraduate,
  FaEnvelope,
} from "react-icons/fa"
export default [
  {
    id: Math.random(),
    path: "/",
    text: "Intro",
    icon: <FaHome style={{ backgroundColor: "transparent" }}></FaHome>,
  },
  {
    id: Math.random(),
    path: "/projects",
    text: "Projects",
    icon: <FaBriefcase></FaBriefcase>,
  },
  {
    id: Math.random(),
    path: "/about",
    text: "About",
    icon: <FaAddressCard></FaAddressCard>,
  },
  {
    id: Math.random(),
    path: "/services",
    text: "Services",
    icon: <FaPencilRuler></FaPencilRuler>,
  },
  {
    id: Math.random(),
    path: "/careers",
    text: "Careers",
    icon: <FaUserGraduate></FaUserGraduate>,
  },
  {
    id: Math.random(),
    path: "/contact",
    text: "Contact",
    icon: <FaEnvelope></FaEnvelope>,
  },
]
