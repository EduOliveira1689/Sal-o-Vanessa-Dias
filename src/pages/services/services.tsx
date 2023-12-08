import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Conteiner, ConteinerImg, TestImage, } from "./services.styled";
import { ImagesServ } from "../../utils/const/base.services"



function Services() {

  return (
    <>
      <Header />
      <Conteiner>
      <ConteinerImg>
        {ImagesServ.map((item) => (
          <>
            <TestImage src={item.img} />
          </>
        ))}
      </ConteinerImg>
      </Conteiner>
      <Footer />
    </>
  )

}

export default Services;