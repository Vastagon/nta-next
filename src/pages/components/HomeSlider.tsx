import { useEffect, useState } from "react"
import Image from 'next/image';

type HomeSliderProps = {
    imageArray: any
}

export default function HomeSlider(props: HomeSliderProps){
    const [imageArrayPosition, setImageArrayPosition] = useState(0)
    const [isAnimationRunning, setIsAnimationRunning] = useState(false)


    function arrowClicked(moveThroughArray: number){
        setIsAnimationRunning(true)
        ///Determines which direction arrow was clicked
        ///moveThroughArray = 1 or -1 depending on arrow clicked
        if(moveThroughArray === 1){
            ///Right Arrow Clicked
            document.getElementById("home-slider-image")?.classList.add("image-slide-right")

            setTimeout(() =>{
                ///End slide off animation and start slide on animation
                setImageArrayPosition(prev => prev + moveThroughArray)
                document.getElementById("home-slider-image")?.classList.remove("image-slide-right")
                document.getElementById("home-slider-image")?.classList.add("image-slide-right-second")
                setIsAnimationRunning(false)
            }, 800)
        }else{
            ///Left Arrow Clicked
            document.getElementById("home-slider-image")?.classList.add("image-slide-left")

            setTimeout(() =>{
                ///End slide off animation and start slide on animation
                setImageArrayPosition(prev => prev + moveThroughArray)
                document.getElementById("home-slider-image")?.classList.remove("image-slide-left")
                document.getElementById("home-slider-image")?.classList.add("image-slide-left-second")
                setIsAnimationRunning(false)
            }, 800)
        }

        ///Remove class for image slide on animation
        setTimeout(() =>{
            document.getElementById("home-slider-image")?.classList.remove("image-slide-left-second")
            document.getElementById("home-slider-image")?.classList.remove("image-slide-right-second")
        }, 1600)

    } 

    ///Loops imageArrayPosition to ends of the array
    useEffect(() =>{
        if(imageArrayPosition < 0){
            setImageArrayPosition(props.imageArray?.length-1)
        }
        if(imageArrayPosition >= props.imageArray?.length){
            setImageArrayPosition(0)
        }    
    }, [imageArrayPosition])

    return(
        <div className="slider-container">
        {isAnimationRunning ? 
            <div className="slider">
                <div id="slider-left-arrow" className="slider-left-arrow slider-arrow"></div>
                    <Image id="home-slider-image" className="slider-image-initial" alt="Taekwondo Image Slider" src={props.imageArray[imageArrayPosition]} />
                <div id="slider-right-arrow" className="slider-right-arrow slider-arrow"></div>
            </div>
        :
            <div className="slider">
                <div id="slider-left-arrow" onClick={() => arrowClicked(-1)} className="slider-left-arrow slider-arrow"></div>
                    <Image id="home-slider-image" className="slider-image-initial" alt="Taekwondo Image Slider" src={props.imageArray[imageArrayPosition]} />
                <div id="slider-right-arrow" onClick={() => arrowClicked(1)} className="slider-right-arrow slider-arrow"></div>
            </div>
        }       
        </div>
    )
}