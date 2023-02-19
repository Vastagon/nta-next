type FailedEmailProps = {
    setShowFailedCard: any
}

export default function FailedEmail(props: FailedEmailProps){
    return(
        <div className="failed-email-card-container">
            <div className="failed-email-card">
                <h2>Failed to send email, please try again</h2>
                <button onClick={() => props.setShowFailedCard(false)}>Close</button>
            </div>
        </div>
    )
}