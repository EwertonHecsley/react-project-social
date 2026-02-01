import s from './card.module.scss'

export const Card = ({photo,alt_photo,title,text,tx_button}) => {
    return (
        <article className={s.main}>
            <img src={photo} alt={alt_photo} />
            <h2>{title}</h2>
            <p>{text}</p>
            <button>{tx_button}</button>
        </article>
    )
}