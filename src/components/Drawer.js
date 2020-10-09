import React from "react"
import { FaTimes } from "react-icons/fa"

import links from "../constants/links"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Drawer = ({ visible, closeDrawer }) => {
  const TRANSITION_LENGTH = 0.4

  return (
    <div
      style={{
        zIndex: "200",
        position: "fixed",
        top: 0,
        right: 0,
        width: "75%",
        height: "100%",
        background: "white",
        boxShadow: "-4px 0 30px rgba(0,0,0,.2)",
        transform: `translateX(${visible ? 0 : 100}%)`,
        transition: "transform 400ms ease-out",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "90px",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.6rem",
            fontWeight: "700",
            textTransform: "uppercase",
            color: "#5c4b51",
          }}
        >
          NAVIGATION
        </h3>
        <button
          onClick={closeDrawer}
          style={{
            width: "44px",
            height: "44px",
            color: "#5c4b51",
            background: "none",
            fontSize: "3rem",
            border: "none",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <FaTimes></FaTimes>
        </button>
      </div>

      <ul style={{ listStyle: "none", width: "100%" }}>
        {links.map(item => {
          return (
            <li
              key={item.id}
              style={{
                height: `calc((100vh - 90px)/3)`,
                minHeight: "100px",
                width: "50%",
                float: "left",
                border: "1px solid white",
                borderTop: "none",
                borderLeft: "none",
                backgroundColor: "#f2f2f2",
              }}
            >
              <AniLink
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  textDecoration: "none",
                }}
                swipe
                direction="left"
                top="entry"
                duration={TRANSITION_LENGTH}
                to={item.path}
                onClick={() => {
                  //zatvori drawer kako god okrenes
                  setTimeout(() => {
                    closeDrawer()
                  }, (TRANSITION_LENGTH + 0.2) * 1000)
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    height: "64px",
                    width: "64px",
                    top: "calc(50% - 48px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "4.2rem",
                    color: "#9e87ce",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </span>
                <em
                  style={{
                    position: "absolute",
                    width: "100%",
                    left: 0,
                    top: "calc(50% + 15px)",
                    fontWeight: "200",
                    fontSize: "1.8rem",
                    fontStyle: "normal",
                    color: "#5c4b51",
                  }}
                >
                  {item.text}
                </em>
              </AniLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Drawer
