import s from './card.module.scss'

export const Card = ({photo,alt_photo,title,text,tx_button,txt_extra,onParticipar}) => {
    const handlerClick = () => {
        if(onParticipar) onParticipar();
    }

    return (
        <article className={s.main}>
            <img src={photo} alt={alt_photo} />
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{txt_extra}</p>
            <button onClick={handlerClick}>{tx_button}</button>
        </article>
    )
}