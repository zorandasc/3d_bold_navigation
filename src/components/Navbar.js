import React from "react"

import { FaAlignRight } from "react-icons/fa"

const Navbar = ({ open }) => {
  return (
    <button
      style={{
        position: "fixed",
        zIndex: "103",
        top: "12px",
        right: "5%",
        width: "44px",
        height: "44px",
        background: "none",
        color: "white",
        border: "none",
        cursor: "pointer",
        outline: "none",
        fontSize: "3rem",
      }}
      onClick={open}
    >
      <FaAlignRight></FaAlignRight>
    </button>
  )
}

export default Navbar
