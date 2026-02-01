import s from './mentoring.module.scss'
import {Card} from '../../components/card/Card'

export const Mentoring = () => {
    return (
        <main className={s.main}>
            <h1>Mentoria</h1>
            <section className={s.box}>
                <Card
                    photo="/mentoring/mentoria-carreira-emprego.png"
                    alt_photo="pessoas em uma reuniao na mesa"
                    title="Mentoria de Carreira e Emprego"
                    text="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
                    tx_button="Quero Participar"
                />
                <div className={s.divisor}></div>
                <Card
                    photo="/mentoring/compartilhe-experiencia.png"
                    alt_photo="pessoas trocando experiecias em uuma conversa"
                    title="Compartilhe Experiências"
                    text="Oriente jovens e profissionais iniciantes em sua área."
                    tx_button="Quero Participar"
                />
                <div className={s.divisor}></div>
                <Card
                    photo="/mentoring/acompanhamento.png"
                    alt_photo="pessoa acompanhando outra em um computador"
                    title="Acompanhamento"
                    text="Participe como guia em jornadas de aprendizado e desenvolvimento."
                    tx_button="Quero Participar"
                />
            </section>
        </main>
    )
}