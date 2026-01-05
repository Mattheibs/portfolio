import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";

const menuLinks = [
  {
    linkName: "home",
    linkPath: "/",
    header: "Matthew Heiberg",
    text: "Frontend Developer",
  },
  {
    linkName: "about",
    linkPath: "/about",
    header: "About",
    text: "Learn more about me",
  },
  {
    linkName: "case-studies",
    linkPath: "/case-studies",
    header: "Case Studies",
    text: "View more of my work",
  },
  {
    linkName: "more-info",
    linkPath: "/more-info",
    header: "More Info",
    text: "Extra info",
  },
  {
    linkName: "contact",
    linkPath: "/contact",
    header: "Contact",
    text: "Different ways to contact me",
  },
];

function SideBar() {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [mobileMenuHidden, setMobileMenuHidden] = useState(true);
  const body = document.body;

  const addNoScroll = () => {
    body.classList.add("no-scroll");
  };
  const removeNoScroll = () => {
    body.classList.remove("no-scroll");
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
    setMobileMenuHidden(!mobileMenuHidden);
    if (!isActive) {
      addNoScroll();
    } else {
      removeNoScroll();
    }
  };

  useEffect(() => {
    const currentPath = location.pathname.includes("case-study")
      ? "case-studies"
      : location.pathname.split("/")[1] || "home";
    setSelectedMenu(currentPath);
  }, [location.pathname]);
  return (
    <div className="sidebar-container" style={{ position: "relative" }}>
      <div className="sidebar-mobile">
        <div>
          <h1>Matthew Heiberg</h1>
          <p>Frontend Developer</p>
        </div>

        <div
          className={`menu-icon ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="mobile-line"></div>
      <div className={`sidebar ${mobileMenuHidden ? "hide" : ""}`}>
        {menuLinks.map((link, index) => {
          return (
            <Link
              key={index}
              className={
                selectedMenu === link.linkName ? "selected-menu" : null
              }
              to={link.linkPath}
              onClick={() => {
                setSelectedMenu(link.linkName);
                setMobileMenuHidden(true);
                setIsActive(!isActive);
                removeNoScroll();
              }}
            >
              <h1>{index === 0 ? "Home" : link.header}</h1>
              <p>{link.text}</p>
              <div className="border-bottom-line"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
