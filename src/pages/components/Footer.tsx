import Image from 'next/image';


type FooterProps = {
    // clickScrollTo: (position: string) => {}
    clickScrollTo: any
}

export default function Footer(props: FooterProps){

    return(
        <footer className="nav-close" id="footer">
            <Image alt="NTA Taekwondo Logo" className="footer-icon footer-segment" src={require("../images/NTALogo.webp")} />
            <div className="quick-links footer-segment">
                <h2>Quick Links</h2>

                <div onClick={() => {props.clickScrollTo("root")}}>Home</div>
                <div onClick={() => {props.clickScrollTo("overviewScroll")}}>Overview</div>
                <div onClick={() => {props.clickScrollTo("programsScroll")}}>Programs</div>
                <div onClick={() => {props.clickScrollTo("scheduleScroll")}}>Schedule</div>
                <div onClick={() => {props.clickScrollTo("reviewsScroll")}}>Reviews</div>
                <div onClick={() => {props.clickScrollTo("contactUsScroll")}}>Contact</div>
            </div>

            <div className='contactus-footer footer-segment'>
                <div className='contact-us-footer-grid'>
                    <h2>Contact Us</h2>
                    <div>3000 Grapevine Mills Pkwy, Grapevine, Texas</div>
                    <div>ntataekwondo@gmail.com</div>
                    <div>(972) 532-3400</div>
                    <Image alt="Facebook Taekwondo Logo" onClick={() => {window.open("https://www.facebook.com/groups/403731716464076", "_blank")}} 
                    className='facebook-icon' src="https://louisville.edu/english/images/facebookicon.png/image" 
                    width={10} height={10}
                    />
                </div>
            </div>
        </footer>
    )
}
