import React from "react";
import "./nav.css";
import navItems from "./navItems";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = section.nextElementSibling
        ? section.nextElementSibling.offsetTop
        : document.body.offsetHeight;

        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveNav(section.id);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div className="nav__container">
        <div className="nav__items">
          {navItems.map(({ title, id, icon }, index) => {
            return (
                <a
                  key={index}
                  href={`#${id}`}
                  onClick={(e) => setActiveNav(id)}
                  className={activeNav === id ? "active" : ""}
                >
                  {icon} {title}
                </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;
