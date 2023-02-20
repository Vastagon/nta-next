import Footer from "../../components/Footer";
import HomeSlider from "../../components/HomeSlider";
import WebsiteNavbar from "../../components/Navbar";
import AfterSchool from "../../components/AfterSchool"
import HomeBottomNav from "../../components/HomeBottomNav";
import Programs from "../../components/Programs"
import Schedule from "../../components/Schedule"
import Reviews from "../../components/Reviews"
import ContactUs from "../../components/ContactUs"
import MobileNav from "../../components/MobileNav";
import LoadingPage from "../../components/LoadingPage";

import crossTrainingImage from "./sliderImages/taekwondoCrosstraining.webp"
import bigBigImage from "./sliderImages/bigTaekwondoTraining.jpg"
import demoTeam from "./sliderImages/taekwondoDemoteam2.webp"

import { useState, useEffect } from 'react';

export async function getServerSideProps() {
  return {
    props: {
      
    }
  }
}

export default function Home() {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [showBottomNav, setShowBottomNav] = useState(false)
  const [imageArray, setImageArray] = useState([crossTrainingImage, bigBigImage, demoTeam])
  const [showPage, setShowPage] = useState(false)
  const [showFailedCard, setShowFailedCard] = useState(false)
  const [showAcceptedCard, setShowAcceptedCard] = useState(false)


      ///Preload slider images
      useEffect(() =>{
        function preloadImages(srcs: string | any[]) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (!preloadImages.cache) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            preloadImages.cache = [];
          }
          let img;
          for (let i = 0; i < srcs.length; i++) {
              img = new Image();
              img.src = srcs[i];
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              preloadImages.cache.push(img);
          }
          setShowPage(true)
        }
                
        preloadImages(imageArray);
    }, [])
    useEffect(() =>{
      document.querySelector("#everything-except-navbar")?.addEventListener("click", () =>{
          if(!showMobileNav){
            setShowMobileNav(false)
          }
      }) 

      document.querySelector("#everything-except-bottom-nav")?.addEventListener("click", () =>{
          if(!showBottomNav){
            setShowBottomNav(false)
          }
      })
      document.querySelector(".mynav")?.addEventListener("click", () =>{
          if(!showBottomNav){
            setShowBottomNav(false)
          }
      })
  }, [showPage])

  function clickScrollTo(position: string){
    const element = document.getElementById(position) as HTMLElement;
      let temp = element.offsetTop - element.scrollTop
      
      ///Position changes for scroll points
      if(position === "overviewScroll") temp = temp - 150
      if(position === "scheduleScroll") temp = temp - 180
      if(position === "contactUsScroll") temp = temp - 150
      if(position === "reviewsScroll") temp = temp - 50

      window.scrollTo(0, temp)

      ///Remove mobile nav after click
      if(showMobileNav){
        setShowMobileNav(false)
      }
  }

  if(!showPage){
    <LoadingPage />
  }else
  return (
    <>
    <main className='App'>
        <WebsiteNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} clickScrollTo={clickScrollTo} />

        <div id="everything-except-navbar">
        <h1 className="nta-title">Welcome to NTA Taekwondo</h1>
        <div id="everything-except-bottom-nav">
        <HomeSlider imageArray={imageArray} />

        <div id="overviewScroll"></div>

        <AfterSchool />
        <Programs />
        <Schedule />
        <Reviews />
        <ContactUs showFailedCard={showFailedCard} setShowFailedCard={setShowFailedCard} showAcceptedCard={showAcceptedCard} setShowAcceptedCard={setShowAcceptedCard} />
        </div>

        <HomeBottomNav showFailedCard={showFailedCard} setShowFailedCard={setShowFailedCard} showAcceptedCard={showAcceptedCard} setShowAcceptedCard={setShowAcceptedCard} showBottomNav={showBottomNav} setShowBottomNav={setShowBottomNav}/>
        <Footer clickScrollTo={clickScrollTo}/>
        </div>
    </main> 

    {showMobileNav ? <MobileNav clickScrollTo={clickScrollTo} /> : null}
    </>
  )
}
