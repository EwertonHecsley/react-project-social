import s from './home.module.scss'

export const Home = () =>{
    return(
        <main className={s.main}>
            <section className={s.one}>
                <section>
                    <h1>Projetos Sociais que transformam</h1>
                    <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
                </section>
                <section>
                    <button className={s.button}>
                        Cadastrar Empresa
                        <img src="seta_buton.png" alt="seta branca" />
                    </button>
                </section>
                <section className={s.data_nambers}>
                    <article>
                        <h2>500 +</h2>
                        <p>Empresas Voluntárias</p>
                    </article>
                    <article>
                        <h2>1.5K +</h2>
                        <p>Projetos Realizados</p>
                    </article>
                    <article>
                        <h2>50K +</h2>
                        <p>Vidas Impactadas</p>
                    </article>
                </section>
            </section>
            <section className={s.two}>
                <img src="hero.png" alt="mãos com crianças de papel" />
            </section>
        </main>
    )
}