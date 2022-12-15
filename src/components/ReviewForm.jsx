import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'

import './ReviewForm.css'

const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="reviewForm">
            <div className="formControl scoreContainer">
                <label className="radioContainer">
                    <input type="radio" value="unsatisfied" name="review" required
                        checked={data.review === "unsatisfied"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)} />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radioContainer">
                    <input type="radio" value="neutral" name="review" required
                        checked={data.review === "neutral"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)} />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radioContainer">
                    <input type="radio" value="satisfied" name="review" required
                        checked={data.review === "satisfied"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)} />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radioContainer">
                    <input type="radio" value="very_satisfied" name="review" required
                        checked={data.review === "very_satisfied"}
                        onChange={(event) => updateFieldHandler("review", event.target.value)} />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </div>
            <div className="formControl">
                <label htmlFor="comment">Comentário:</label>
                <textarea name="comment" id="comment" placeholder='Conte como foi sua experiência' required
                    value={data.comment || ''} onChange={(event) => updateFieldHandler('comment', event.target.value)}></textarea>
            </div>
        </div>
    )
}

export default ReviewForm