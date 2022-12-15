import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'

import './Thanks.css'

const Thanks = () => {
    return (
        <div className='thanksContainer'>
            <p>A sua opnião é muito importante!</p>
            <p>Para concluir a avaliação, clique no botão enviar agora.</p>
            <h3>Aqui está o resumo da sua avaliação:</h3>
            <p className="reviewData">
                <span>Satisfação:</span>
            </p>
            <p className="reviewData">
                <span>Comentário:</span>
            </p>
        </div>
    )
}

export default Thanks