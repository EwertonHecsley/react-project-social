import { useState } from "react";
import { PageLayout } from "../../components/pageLayout/PageLayout";
import { SuccessPopup } from "../../components/sucess/SucessPopup";


export const Mentoring = () => {
  const [showSucess, setShowSucess] = useState(false);

  const cards = [
    {
      photo: "/mentoring/mentoria-carreira-emprego.png",
      alt: "pessoas em uma reunião na mesa",
      title: "Mentoria de Carreira e Emprego",
      text: "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.",
      button: "Quero Participar",
    },
    {
      photo: "/mentoring/compartilhe-experiencia.png",
      alt: "pessoas trocando experiências em uma conversa",
      title: "Compartilhe Experiências",
      text: "Oriente jovens e profissionais iniciantes em sua área.",
      button: "Quero Participar",
    },
    {
      photo: "/mentoring/acompanhamento.png",
      alt: "pessoa acompanhando outra em um computador",
      title: "Acompanhamento",
      text: "Participe como guia em jornadas de aprendizado e desenvolvimento.",
      button: "Quero Participar",
    },
  ];

  const handleClick = () => {
    setShowSucess(true);
  };

  return (
    <>
      <PageLayout
        title="Mentoria"
        cards={cards}
        onCardClick={handleClick}
      />

      {showSucess && (
        <SuccessPopup onClose={() => setShowSucess(false)} />
      )}
    </>
  );
};
