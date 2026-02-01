import s from './lectures.module.scss'
import { Card } from '../../components/card/Card'

export const Lectures = () => {
    return (
        <main className={s.main}>
            <h1>Eventos & Palestras</h1>
            <section className={s.box}>
                <Card
                    photo="/lectures/empoderando-jovens-futuro.png"
                    alt_photo="jovens reunidos em uma sala fazendo um circulo"
                    title="Empoderando Jovens para o Futuro"
                    text="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
                    txt_extra="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
                    tx_button="Quero Participar"
                />
                <div className={s.divisor}></div>
                <Card
                    photo="/lectures/tecnologia-que-transforma.png"
                    alt_photo="pessoas trocando experiecias em uuma conversa"
                    title="Tecnologia que Transforma"
                    text="Atividade: Workshop de introdução à programação e inovação digital."
                    txt_extra="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
                    tx_button="Quero Participar"
                />
                <div className={s.divisor}></div>
                <Card
                    photo="/lectures/carreira-primeiro-emprego.png"
                    alt_photo="mulher loira sorridente"
                    title="Carreira e Primeiro Emprego"
                    text="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
                    txt_extra="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
                    tx_button="Quero Participar"
                />
            </section>
        </main>
    )
}