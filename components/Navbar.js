import React from 'react';
import '../components/Navbar.css';
import logo from './/images/logo.svg';
// import arrow from './/images/icon-arrow-up.svg';
import down1 from './/images/icon-arrow-down.svg';
import down2 from './/images/icon-arrow-down.svg';
import up1 from './/images/icon-arrow-up.svg';
import up2 from './/images/icon-arrow-up.svg';
import todo from './images/icon-todo.svg';
import planning from './images/icon-planning.svg';
import reminders from './images/icon-reminders.svg';
import calendar from './images/icon-calendar.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import {useState} from 'react';

function Navbar() {

    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggleNav, setToggleNav] = useState(false)

  return (
    <>
        <nav className='navbar'>
        <div className='navbar-nav'>
          <a href="/">
             <img src={logo} className='logo' alt="" />
            </a> 
            <ul className={`navbar__ ${toggleNav ? "show_nav" : "hide_nav" }`}>
                <li><a onClick={()=> setToggle(!toggle)} href="#">Features    { toggle ? <img src={down1} className='arrow_down_1' alt="" /> :<img src={up1} className='arrow_up' alt="" /> }   </a>
              
                <div  className={`toggle_subnav_1 subnav ${!toggle? "show_subnav1":"hide_subnav1"}`}> 
                    <ul>
                        <li><a href="/"> <img src={todo} alt="" /> Todo List</a></li>
                        <li><a href="/"> <img src={calendar} alt="" /> Calender</a></li>
                        <li><a href="/"> <img src={reminders} alt="" /> Reminders</a></li>
                        <li><a href="/"> <img src={planning} alt="" /> Planing</a></li>
                    </ul>
                </div>
                </li>
                <li><a onClick={()=> setToggle2(!toggle2)} href="#">Company { toggle2 ? <img src={down2} className='arrow_down_2' alt="" /> :<img src={up2} className='arrow_up' alt="" /> } </a>
                <div className={`toggle_subnav_2 subnav ${!toggle2? "show_subnav1":"hide_subnav2"}`}>
                    <ul>
                        <li><a href="/">  History</a></li>
                        <li><a href="/">  Our Team</a></li>
                        <li><a href="/"> Blo</a></li>
                    </ul>
                </div>
                </li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">About</a></li>
            </ul>
            <div className={`btns ${toggleNav? 'show_btns' : 'hide_btns'} ${!toggle ? "pos_1" : ""} ${!toggle2 ? "pos_1" : ""}` }>
                <a  className='btn_login' href="/">Login</a> 
               <a className='btn_register' href="/"> Register</a>
            </div>
            <button onClick={()=> setToggleNav(!toggleNav)} className='toggle_menu_btns'>
               {
                 !toggleNav? <GiHamburgerMenu className='open_nav'/> :
                 <MdOutlineClose className='close_nav'/>
               }
            </button>
            </div>
        </nav>
    
    </>
  )
}

export default Navbar