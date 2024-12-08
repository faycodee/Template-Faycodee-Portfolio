import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { xor } from "three/examples/jsm/nodes/Nodes.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const timeline = gsap.timeline({
    // scrollTrigger: {
    //     trigger: "#logo",
    //     start: "top ",
    //     end: "bottom ",
    //     scrub: 4.2,
    //     markers: 1,
    //     toggleActions: "restart pause reverse pause",
    //   },
    repeat: -1,
    repeatDelay: 0.2,
    yoyo: 1,
    
  });
  useGSAP(() => {
    timeline.to("#logo", {
      opacity: 0.5,
      x: -10,
      y: 7,
      ease: "power1.in",
      
      duration: 2.5,
    });
   
    timeline.to("#logo", {
      opacity: 0.5,
      x: 30,
      y: -8,
      ease: "power1.in",

      duration: 6.5,
    });
    timeline.to("#logo", {
      opacity: 0.5,
      x: 10,
      y: 7,
      ease: "elastic",
     
      duration: 2.5,
    });
    timeline.to("#logo", {
      opacity: 0.5,
      x: 7,
      y: 2,
      ease: "bounce.in",

      duration: 3.5,
    });
    gsap.from("#nav", {
      opacity: 0,
      y: -30,
      ease: "power1.in",
      delay: 5.4,
      duration: 0.5,
    });
  }, []);
  return (
    <nav
      id="nav"
      style={{ backdropFilter: "blur(8px)", height: "8vh" }}
      className={`${styles.paddingX} w-full flex items-center py-2 fixed  
      top-0 z-20 bg-transparent sm:opacity-[0.97] xxs:h-[6vh] rounded-se-3xl backNav`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            id="logo"
            className=" rounded-3xl sm:w-[35px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-slate-200" : "text-gray-500"
              } hover:text-taupe text-[11px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links shadow-xl `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 flex flex-col items-center bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]"
              >
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`  ${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    } font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`} className="text-[18px] text-black">{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
