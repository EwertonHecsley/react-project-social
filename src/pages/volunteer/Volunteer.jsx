import {Card} from "../../components/card/Card";
import s from './volunteer.module.scss'

export const Volunteer = () => {
    return(
            <main className={s.main}>
                <h1>Voluntariado</h1>
                <section className={s.box}>
                    <Card
                        photo="/volunteer/mutirao-reciclagem.png"
                        alt_photo="caixas de papelão"
                        title="Multirão de Reciclagem"
                        text="Coletar materiais recicláveis e orientar sobre descarte consciente."
                        tx_button="Quero Participar"
                    />
                    <div className={s.divisor}></div>
                    <Card
                        photo="/volunteer/aulas-tecnologia.png"
                        alt_photo="pessoas acessando computador"
                        title="Aulas de Tecnologia"
                        text="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
                        tx_button="Quero Participar"
                    />
                    <div className={s.divisor}></div>
                    <Card
                        photo="/volunteer/esporte-inclusao.png"
                        alt_photo="pessoas praticando atividade fisica"
                        title="Esporte e Inclusção"
                        text="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
                        tx_button="Quero Participar"
                    />
                </section>
            </main>
        )
}