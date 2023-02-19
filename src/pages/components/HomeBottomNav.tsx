import { useState } from "react"
import * as emailjs from 'emailjs-com'
import Spinner from "./Spinner"
import FailedEmail from "./FailedEmail"
import AcceptedEmail from "./AcceptedEmail"

type BottomNavProps = {
    setShowAcceptedCard: any
    showAcceptedCard: boolean
    showFailedCard: boolean
    setShowFailedCard: any
    showBottomNav: boolean
    setShowBottomNav: any
}

export default function HomeBottomNav(props: BottomNavProps){
    const [bottomFormSendingEmail, setBottomFormSendingEmail] = useState(false)
    const [bottomFormInfo, setBottomFormInfo] = useState({})
    const [firstClickBoolean, setFirstClickBoolean] = useState(false)

    function updateFormInfo(e: any){
        setBottomFormInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function submitBottomForm(e: { preventDefault: () => void }){
        e.preventDefault()
        ///Uses emailjs to send email
        setBottomFormSendingEmail(true)
        emailjs.send(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, bottomFormInfo, process.env.REACT_APP_PUBLIC_KEY!)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setBottomFormSendingEmail(false)
            props.setShowAcceptedCard(true)
            // document.getElementById("name").value = ""
            // document.getElementById("email").value = ""
            // document.getElementById("phone").value = ""
            // document.getElementById("message").value = ""    
            setBottomFormInfo({name: "", phone: "", email: "", message: ""})
        }, (err) => {
            console.log('FAILED...', err);
            setBottomFormSendingEmail(false)
            props.setShowFailedCard(true)
        });

    }


    function toggleBottomNav(){
        props.setShowBottomNav((prev: boolean) => !prev)
        if(!firstClickBoolean){
            setFirstClickBoolean(true)
        }
    }

    
    return(
        <>
            {props.showBottomNav ? 
            <>
            {/* While open */}
            <div className="open-bottom-nav bottom-nav">
                {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
                <div className="bottom-text-container" onClick={!bottomFormSendingEmail ? toggleBottomNav : () =>{}}>
                    <div className="show-hover" style={{display: "flex"}}>
                        <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                    </div>     
                    <div className="turn-bottom-nav-arrow bottom-nav-arrow"></div>
                </div>
            </div>
            <form onSubmit={submitBottomForm} onChange={updateFormInfo} className="bottom-nav-form">
                <label>Name <span className="asterisk">*</span></label>
                <input placeholder="Required" required id="bottom-nav-form-name" name="name" />
                <label>Email <span className="asterisk">*</span></label>
                <input placeholder="Required" required id="bottom-nav-form-email" name="email" />
                <label>Phone Number <span className="asterisk">*</span></label>
                <input placeholder="Required" required id="bottom-nav-form-phone" name="phone" />
                <label>Message</label>
                <input placeholder="Optional" id="bottom-nav-form-message" name="message" />

                <button className="bottom-form-submit-button" type="submit">Submit</button>
            </form>      
            </>
            :
            // While Closed
            <>
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <div onClick={!bottomFormSendingEmail ? toggleBottomNav : ()=> {}} className={firstClickBoolean ? "slide-down-animation show-hover bottom-nav" : "show-hover bottom-nav"}>

                <div className={firstClickBoolean ? "no-bottom-border bottom-text-container" : "no-bottom-nav-border bottom-text-container"}>
                    <h4 className="bottom-nav-text">Interested? Sign up for classes</h4>
                    <div className={firstClickBoolean ? "turn-bottom-arrow-down bottom-nav-arrow" : "bottom-nav-arrow"}></div>
                </div>

            </div>
                <form onSubmit={submitBottomForm} onChange={updateFormInfo} className={firstClickBoolean ? "closed-form bottom-nav-form" : "first-closed-form bottom-nav-form" }>
                    <label>Name <span className="asterisk">*</span></label>
                    <input placeholder="Required" required id="bottom-nav-form-name" name="name" />
                    <label>Email <span className="asterisk">*</span></label>
                    <input placeholder="Required" required id="bottom-nav-form-email" name="email" />
                    <label>Phone Number <span className="asterisk">*</span></label>
                    <input placeholder="Required" required id="bottom-nav-form-phone" name="phone" />
                    <label>Message</label>
                    <input placeholder="Optional" id="bottom-nav-form-message" name="message" />


                    <button className="bottom-form-submit-button" type="submit">Submit</button>
                </form> 
            </>
            }  


            {
                bottomFormSendingEmail ? 
                    <Spinner />         
                :
                    null
            } 

            {
                props.showFailedCard ? 
                    <FailedEmail setShowFailedCard={props.setShowFailedCard}/>
                :
                    null
            }
            
            {
                props.showAcceptedCard ? 
                    <AcceptedEmail setShowAcceptedCard={props.setShowAcceptedCard}/>
                :
                    null
            }
        </>



    )
}