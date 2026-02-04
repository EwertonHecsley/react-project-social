import s from './perfil.module.scss'

export const Perfil = () => {
    return (
        <main className={s.main}>
            <section className={s.box}>
                <section className={s.boxLeft}>
                    <img src="https://avatars.githubusercontent.com/EwertonHecsley" alt="foto do usuário" />
                </section>
                <section className={s.boxRigth}>
                    <section className={s.boxRigthTop}>
                        <h2>Ewerton Hecsley</h2>
                        <p>Voluntário Ativo</p>
                    </section>
                    <section className={s.boxRigthMain}>
                        <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
                        <section className={s.boxRigthMainTwo}>
                            <section className={s.icon}>
                                <img src="/localizacao.png" alt="icone de localizacao" />
                                <p>
                                    Salvador, BA
                                </p>
                            </section>
                            <section className={s.icon}>
                                <img src="/carta.png" alt="icone de uma caixa" />
                                <p>
                                    ewerton.martinscomercial@gmail.com
                                </p>
                            </section>
                            <section className={s.icon}>
                                <img src="/calendario.png" alt="icone de um calendário" />
                                <p>
                                    Membro desde Janeiro 2022
                                </p>
                            </section>
                        </section>
                        <section className={s.boxTags}>
                                <p>Educação</p>
                                <p>Meio Ambiente</p>
                                <p>Assistência Social</p>
                                <p>Desing</p>
                            </section>
                    </section>
                </section>
            </section>
        </main>   
    )
}