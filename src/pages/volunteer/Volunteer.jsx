import { useState } from "react";
import { PageLayout } from "../../components/pageLayout/PageLayout";
import { SuccessPopup } from "../../components/sucess/SucessPopup";

export const Volunteer = () => {
  const [showSucess, setShowSucess] = useState(false);

  const cards = [
    {
      photo: "/volunteer/mutirao-reciclagem.png",
      alt: "caixas de papelão",
      title: "Mutirão de Reciclagem",
      text: "Coletar materiais recicláveis e orientar sobre descarte consciente.",
      button: "Quero Participar",
    },
    {
      photo: "/volunteer/aulas-tecnologia.png",
      alt: "pessoas acessando computador",
      title: "Aulas de Tecnologia",
      text: "Ensinar informática e programação para jovens.",
      button: "Quero Participar",
    },
    {
      photo: "/volunteer/esporte-inclusao.png",
      alt: "pessoas praticando atividade fisica",
      title: "Esporte e Inclusão",
      text: "Promover disciplina, saúde e trabalho em equipe.",
      button: "Quero Participar",
    },
  ];

  const handleClick = () => {
    setShowSucess(true);
  };

  return (
    <>
      <PageLayout
        title="Voluntariado"
        cards={cards}
        onCardClick={handleClick}
      />

      {showSucess && <SuccessPopup onClose={() => setShowSucess(false)} />}
    </>
  );
};
