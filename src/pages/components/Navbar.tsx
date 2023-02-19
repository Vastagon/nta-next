import Image from 'next/image';

import MobileNav from "./MobileNav"

import NTALogo from "../images/NTALogo.webp"
import { useEffect, useState } from 'react';

type NavbarProps = {
    clickScrollTo: any
    setShowMobileNav: any
    showMobileNav: boolean
}

export default function Navbar(props: NavbarProps){
    const [innerSizes, setInnerSizes] = useState({height: window.innerHeight, width: window.innerWidth})

    useEffect(() =>{
        ///Adding event listener for resizing
        window.addEventListener("resize", () =>{
            setInnerSizes({height: window.innerHeight, width: window.innerWidth})
        })
    }, [])        

    const openMobileNav = () =>{
        props.setShowMobileNav((prev: boolean) => !prev)

        //Hides hamburger nav when slide out animation is playing
        if(!props.showMobileNav){
            document.getElementById("hamburger-nav")?.classList.add("hidden")

            setTimeout(() =>{
                document.getElementById("hamburger-nav")?.classList.remove("hidden")
            }, 1000)
        }
    }


    if(!innerSizes) return null

    return(
        <div className="mynav">
            <Image alt="NTA Taekwondo Logo" onClick={() => props.clickScrollTo("root")} src={NTALogo} className="icon nav-tab" />

            {(innerSizes.width <= 950 || innerSizes.height < 425) ? 
            // Mobile Navbar
            <div id="hamburger-nav" onClick={openMobileNav} className="hamburger-nav">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
            :             
            <div className="nav-tab-container">
                <div onClick={() => {props.clickScrollTo("overviewScroll")}} className="desktop-tab overview-tab nav-tab">Overview</div>                
                <div onClick={() => {props.clickScrollTo("programsScroll")}} className="desktop-tab programs-tab nav-tab">Programs</div>
                <div onClick={() => {props.clickScrollTo("scheduleScroll")}} className="desktop-tab schedule-tab nav-tab">Schedule</div>
                <div onClick={() => {props.clickScrollTo("reviewsScroll")}} className="desktop-tab reviews-tab nav-tab">Reviews</div>
                <div onClick={() => {props.clickScrollTo("contactUsScroll")}} className="desktop-tab contactus-tab nav-tab">Contact Us</div>
            </div>
            }

            {props.showMobileNav ? <MobileNav clickScrollTo={props.clickScrollTo} /> : null}
        </div>
    )
}