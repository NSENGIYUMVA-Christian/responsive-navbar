import React from 'react'
import {useState, useRef} from "react"
import {FaBars} from "react-icons/fa";
import {links,social} from "./data"
import logo from "./assets/chris logo 3.png"

const Navbar = () => {
    // toggle button state
    const [showlinks, setShowlinks] = useState(false)
const linksContainerRef = useRef(null);
const linksRef = useRef(null)

const toggleLinks = ()=>{
   setShowlinks(!showlinks)
}

  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} height="40px" className="logo" alt="logo"/>
                <button className="nav-toggle" onClick={toggleLinks} ><FaBars/></button>
            </div>
          <div className="links-container" ref={linksContainerRef} style={{height:showlinks ?  `${linksRef.current.getBoundingClientRect().height}px` : `0px`}}  >
                <ul className="links" ref={linksRef} >
                    {links.map((link)=>{
                        const {id,url,text} = link
                        return <li key={id} >
                         <a href={url} target='_blank' >{text}</a>
                        </li>
                    })}
                </ul>
            </div>
            {/* social links */}
           <ul className='social-icons' >
            {social.map((socialIc)=>{
                const {id,url,icon} = socialIc;
                return <li key={id} >
                    <a href={url}>{icon}</a>
                </li>
            }) }
           </ul>
        </div>
    </nav>
  )
}

export default Navbar