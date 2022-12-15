import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'

import './ReviewForm.css'

const ReviewForm = () => {
    return (
        <div className="reviewForm">
            <div className="formControl scoreContainer">
                <label className="radioContainer">
                    <input type="radio" value="unsatisfied" name="review" required />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radioContainer">
                    <input type="radio" value="neutral" name="review" required />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radioContainer">
                    <input type="radio" value="satisfied" name="review" required />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radioContainer">
                    <input type="radio" value="very-satisfied" name="review" required />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </div>
            <div className="formControl">
                <label htmlFor="comment">Comentário:</label>
                <textarea name="comment" id="comment" placeholder='Conte como foi sua experiência' required></textarea>
            </div>
        </div>
    )
}

export default ReviewForm