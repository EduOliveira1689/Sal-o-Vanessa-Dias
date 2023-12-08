import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { ContHistory, Conteiner, DivHistory, ImgBanner } from "./about.style";
import BannerSalonn from "../../assets/img/faixada.jpg"


function About() {

  return (
    <>
      <Header />
      <Conteiner>
        <ContHistory>
          <ImgBanner alt="" src={BannerSalonn} />
          <DivHistory>
            <span>Fundado no ano de 2008, o salão de beleza Vanessa Dias sempre teve
              o foco em atender seus clientes da melhor forma e com os melhores
              produtos, sempre buscando novos conhecimentos no setor, a cabeleireira
              Vanessa Dias realizou diversos cursos visando sempre ampliar suas
              opções de serviços para melhor atender suas clientes.</span>
          </DivHistory>
        </ContHistory>
      </Conteiner>
      <Footer />
    </>
  )
}

export default About;