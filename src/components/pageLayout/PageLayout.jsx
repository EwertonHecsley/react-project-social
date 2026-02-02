import s from "./pageLayout.module.scss";
import {Card} from '../card/Card'

export const PageLayout = ({ title, cards, onCardClick }) => {
  return (
    <main className={s.main}>
      <h1>{title}</h1>

      <section className={s.box}>
        {cards.map((card, index) => (
          <>
            <Card
              key={card.title}
              photo={card.photo}
              alt_photo={card.alt}
              title={card.title}
              text={card.text}
              txt_extra={card.txt_extra}
              tx_button={card.button}
              onParticipar={() => onCardClick?.(card)}
            />
            {index < cards.length - 1 && <div className={s.divisor}></div>}
          </>
        ))}
      </section>
    </main>
  );
};
