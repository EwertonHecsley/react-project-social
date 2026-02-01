import { Card } from '../../components/card/Card'
import s from './donation.module.scss'

export const Donation = () => {
    return(
        <main className={s.main}>
            <h1>Donations</h1>
            <section className={s.box}>
                <Card
                    photo="/donation/instituto-grande-familia.png"
                    alt_photo="homem carregando uma caixa"
                    title="Instituto Grande Família"
                    text="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
                    tx_button="Quero Doar"
                />
                <div className={s.divisor}></div>
                <Card
                    photo="/donation/projeto-futuro-escola..png"
                    alt_photo="livros"
                    title="Projeto Futuro na Escola"
                    text="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
                    tx_button="Quero Doar"
                />
                <div className={s.divisor}></div>
                <Card
                    photo="/donation/instituto-conecta-jovem..png"
                    alt_photo="pessoas montando um PC"
                    title="Instituto Conecta Jovem"
                    text="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
                    tx_button="Quero Doar"
                />
            </section>
        </main>
    )
}