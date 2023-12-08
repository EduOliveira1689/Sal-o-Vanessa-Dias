import BannerBackGround from "../../assets/img/imagem3.png"
import Banner1 from "../../assets/img/imagem2.png"
import image1 from "../../assets/img/cabelo1.jpg"
import image2 from "../../assets/img/mao3.jpg"
import image3 from "../../assets/img/mao5.jpg"
import image4 from "../../assets/img/cabelo4.jpg"


import {
  BannerImage,
  BannerImage2,
  Container,
  BoxBanner,
  BoxBanner2,
  TextImage2,
  ServicesBox,
  Services1,
  Services2,
  ContainerServices,
  DescriptionServices,
  ImageServices,
  DescriptionLine,
} from "./home.styled"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"



function Home() {

  return (
    <>
      <Header />
      <BoxBanner>
        <BannerImage alt="" src={Banner1} />
      </BoxBanner>
      <Container>
        <BoxBanner2>
          <BannerImage2 alt="" src={BannerBackGround} />
          <TextImage2>
            <h1>efeito natural e de longa duração</h1>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quia deleniti neque dignissimos. Eos magnam, hic iusto</span>
          </TextImage2>
        </BoxBanner2>
      </Container>
      <ServicesBox>
        <Services1>
          <h1>Lorem ipsum</h1>
          <button>Reserve Já</button>
        </Services1>
        <Services2>
          <h1>Lorem ipsum</h1>
          <button>Reserve Já</button>
        </Services2>
      </ServicesBox>
      <ContainerServices>
        <DescriptionServices>
          <DescriptionLine>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sint eveniet voluptate quasi ipsa dolorum fugit, incidunt
              accusantium placeat </h2>
          </DescriptionLine>
          <ImageServices alt="" src={image1} />
        </DescriptionServices>
        <DescriptionServices>
          <ImageServices alt="" src={image4} />
          <DescriptionLine>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sint eveniet voluptate quasi ipsa dolorum fugit, incidunt
              accusantium placeat </h2>
          </DescriptionLine>
        </DescriptionServices>
        <DescriptionServices>
          <DescriptionLine>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sint eveniet voluptate quasi ipsa dolorum fugit, incidunt
              accusantium placeat </h2>
          </DescriptionLine>
          <ImageServices alt="" src={image2} />
        </DescriptionServices>
        <DescriptionServices>
          <ImageServices alt="" src={image3} />
          <DescriptionLine>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sint eveniet voluptate quasi ipsa dolorum fugit, incidunt
              accusantium placeat </h2>
          </DescriptionLine>
        </DescriptionServices>
      </ContainerServices>
      <Footer />
    </>
  )
}

export default Home;