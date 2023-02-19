type MobileNavProps = {
    clickScrollTo: any
}

export default function MobileNav(props: MobileNavProps){

    return(
        <div className="mobile-nav">
            <div onClick={() => {props.clickScrollTo("overviewScroll")}} className="overview-tab nav-tab">Overview</div>                
            <div onClick={() => {props.clickScrollTo("programsScroll")}} className="programs-tab nav-tab">Programs</div>
            <div onClick={() => {props.clickScrollTo("scheduleScroll")}} className="schedule-tab nav-tab">Schedule</div>
            <div onClick={() => {props.clickScrollTo("reviewsScroll")}} className="reviews-tab nav-tab">Reviews</div>
            <div onClick={() => {props.clickScrollTo("contactUsScroll")}} className="contactus-tab nav-tab">Contact Us</div>
        </div>
    )
}