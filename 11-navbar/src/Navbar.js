import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleClick = () => {
    setToggle(!toggle);

  }
    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      console.log(linksContainerRef.current.getBoundingClientRect().height);
      console.log(linksHeight);
      if (toggle) {
        linksContainerRef.current.style.height=`${linksHeight}px`
      }
      else
        linksContainerRef.current.style.height='0px'
  },[toggle])
  
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className={`nav-toggle ${toggle?'nav-toggleRotate':''}`} onClick={handleClick}>
            <FaBars />
          </button>
        </div>

        <div className={`links-container`} ref={linksContainerRef} >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li id={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            return (
              <li id={link.id}>
                <a href={link.url}>{link.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
