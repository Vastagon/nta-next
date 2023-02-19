type ReviewsProps = {
    content: string
    reviewer: string
}

export default function ReviewsCard(props: ReviewsProps){
    return(
        <div className="review-card">
            <div className="review-content">
                <p>{props.content}</p>
            </div>
            <div className="reviewer-name">
                <p>{props.reviewer}</p>
            </div>
        </div>
    )
}