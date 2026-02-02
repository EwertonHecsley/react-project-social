import { PageLayout } from '../../components/pageLayout/PageLayout'

export const Donation = () => {
    const cards = [
        {
            photo: "/donation/instituto-grande-familia.png",
            alt: "homem carregando uma caixa",
            title: "Instituto Grande Família",
            text: "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
            button: "Quero Doar"
        },
        {
            photo: "/donation/projeto-futuro-escola..png",
            alt: "livros",
            title: "Projeto Futuro na Escola",
            text: "Doe materiais escolares para ajudar jovens nos estudos.",
            button: "Quero Doar",
        },
        {
            photo: "/donation/instituto-conecta-jovem..png",
            alt: "pessoas montando um PC",
            title: "Instituto Conecta Jovem",
            text: "Doe equipamentos para inclusão digital de jovens.",
            button: "Quero Doar",
        },
    ]
    return (
        <PageLayout title="Doações" cards={cards}/>
    )
}