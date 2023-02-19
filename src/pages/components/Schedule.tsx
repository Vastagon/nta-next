import { useEffect, useState } from "react";
import DesktopSchedule from "./DesktopSchedule";
import MobileSchedule from "./MobileSchedule";



export default function Schedule(){
    const [screenWidth, setScreenWidth] = useState<number>()
    const [screenHeight, setScreenHeight] = useState<number>()
    const [screenOrientation, setScreenOrientation] = useState<string>()

    useEffect(() =>{
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
        setScreenOrientation(window?.screen?.orientation?.type)

        window.addEventListener("resize", () =>{
            setScreenWidth(window.innerWidth)
            setScreenHeight(window.innerHeight)
        })
        window.addEventListener("change", () =>{
            setScreenOrientation(window?.screen?.orientation?.type)
        })
    }, [])

    if(!screenHeight || !screenWidth || !screenOrientation) return null

    return(

        <div className="schedule nav-close">
            <h1 className="schedule-title">Schedule</h1>

            {screenWidth < screenHeight || (screenOrientation === "landscape-primary" && screenWidth < 800)?
                <MobileSchedule />
            :
                <DesktopSchedule />
            }
        </div>
    )
}