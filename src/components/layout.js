/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"

import Drawer from "./Drawer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = React.useState(false)

  const handleOpenSidebar = () => {
    setDrawerVisible(true)
  }

  const handleCloseSidebar = () => {
    setDrawerVisible(false)
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          transform: drawerVisible
            ? "perspective(800px) translateZ(-80px)"
            : "none",
          transition: "transform 400ms  ease-out",
        }}
      >
        <Navbar open={handleOpenSidebar}></Navbar>
        <main>{children}</main>
      </div>

      <Drawer visible={drawerVisible} closeDrawer={handleCloseSidebar}></Drawer>
    </>
  )
}

export default Layout
