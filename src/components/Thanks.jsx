import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'

import './Thanks.css'

const Thanks = ({ data }) => {

    const emojiData = {
        unsatisfied: <BsFillEmojiFrownFill />,
        neutral: <BsFillEmojiNeutralFill />,
        satisfied: <BsFillEmojiSmileFill />,
        very_satisfied: <BsFillEmojiHeartEyesFill />,
    }

    return (
        <div className='thanksContainer'>
            <p>A sua opnião é muito importante!</p>
            <p>Para concluir a avaliação, clique no botão enviar agora.</p>
            <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
            <p className="reviewData">
                <span>Satisfação:</span>
                {emojiData[data.review]}
            </p>
            <p className="reviewData">
                <span>Comentário: {data.comment}</span>
            </p>
        </div>
    )
}

export default Thanks