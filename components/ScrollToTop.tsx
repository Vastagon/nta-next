import { useLayoutEffect } from "react";
import { useRouter } from 'next/router'

///Not using for now. It's a wrapper that moves scroll back to top of page when changing page
export default function ScrollToTop(){
    const location = useRouter()
    console.log(location)
    useLayoutEffect(() =>{
        document.documentElement.scrollTo(0,0)
    }, [location.pathname])
}

