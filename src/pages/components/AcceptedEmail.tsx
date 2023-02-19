type AcceptedEmailProps = {
    setShowAcceptedCard: any
}

export default function AcceptedEmail(props: AcceptedEmailProps){
    return(
        <div className="failed-email-card-container">
            <div className="failed-email-card">
                <h2>Email Sent</h2>
                <button onClick={() => props.setShowAcceptedCard(false)}>Close</button>
            </div>
        </div>
    )
}