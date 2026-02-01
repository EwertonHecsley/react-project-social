import { useState } from "react";
import {Card} from "../../components/card/Card";
import s from './volunteer.module.scss'
import { SuccessPopup } from "../../components/sucess/SucessPopup";

export const Volunteer = () => {
    const [showSucess, setShowSucess] = useState(false);

    const handlerClick = () =>{
        setShowSucess(true);
        setTimeout(()=> setShowSucess(false),4000);
    }

    return(
        <>
            <main className={s.main}>
                <h1>Voluntariado</h1>
                <section className={s.box}>
                    <Card
                        photo="/volunteer/mutirao-reciclagem.png"
                        alt_photo="caixas de papelão"
                        title="Multirão de Reciclagem"
                        text="Coletar materiais recicláveis e orientar sobre descarte consciente."
                        tx_button="Quero Participar"
                        onParticipar={handlerClick}
                    />
                    <div className={s.divisor}></div>
                    <Card
                        photo="/volunteer/aulas-tecnologia.png"
                        alt_photo="pessoas acessando computador"
                        title="Aulas de Tecnologia"
                        text="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
                        tx_button="Quero Participar"
                        onParticipar={handlerClick}
                    />
                    <div className={s.divisor}></div>
                    <Card
                        photo="/volunteer/esporte-inclusao.png"
                        alt_photo="pessoas praticando atividade fisica"
                        title="Esporte e Inclusção"
                        text="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
                        tx_button="Quero Participar"
                        onParticipar={handlerClick}
                    />
                </section>
            </main>
            
            {showSucess && <SuccessPopup onClose={()=> setShowSucess(false)}/>}
        </>
    )
}
