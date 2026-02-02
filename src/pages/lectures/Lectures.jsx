import { useState } from "react";
import { PageLayout } from "../../components/pageLayout/PageLayout";
import { SuccessPopup } from "../../components/sucess/SucessPopup";


export const Lectures = () => {
  const [showSucess, setShowSucess] = useState(false);

  const cards = [
    {
      photo: "/lectures/empoderando-jovens-futuro.png",
      alt: "jovens reunidos em uma sala fazendo um círculo",
      title: "Empoderando Jovens para o Futuro",
      text: "Atividade: Palestra motivacional sobre liderança jovem e transformação social.",
      extra: "Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.",
      button: "Quero Participar",
    },
    {
      photo: "/lectures/tecnologia-que-transforma.png",
      alt: "pessoas trocando experiências em uma conversa",
      title: "Tecnologia que Transforma",
      text: "Atividade: Workshop de introdução à programação e inovação digital.",
      extra: "Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.",
      button: "Quero Participar",
    },
    {
      photo: "/lectures/carreira-primeiro-emprego.png",
      alt: "mulher sorridente",
      title: "Carreira e Primeiro Emprego",
      text: "Atividade: Palestra com profissionais de RH sobre currículo e entrevistas.",
      extra: "Impacto: Ajudar jovens a conquistar oportunidades de trabalho.",
      button: "Quero Participar",
    },
  ];

  const handleClick = () => {
    setShowSucess(true);
  };

  return (
    <>
      <PageLayout
        title="Eventos & Palestras"
        cards={cards}
        onCardClick={handleClick}
      />

      {showSucess && (
        <SuccessPopup onClose={() => setShowSucess(false)} />
      )}
    </>
  );
};
