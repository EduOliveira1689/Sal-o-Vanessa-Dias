import {
  Container,
  InputEmail,
  ContainerData,
  DivDivision,
  ButtonEmail,
  Email,
  TextDiv,
  Adress
} from "./footer.styled";

function Footer() {

  return (
    <Container>
      <DivDivision height='5px' />
      <ContainerData>
        <TextDiv>
          <h2>Cadastre-se e receba as melhores novidades e promoções</h2>
        </TextDiv>
        <Email>
          <InputEmail type="email" placeholder="EMAIL" />
          <ButtonEmail>CADASTRAR</ButtonEmail>
        </Email>
      </ContainerData>
      <Adress>
        <ul>
          <li>Salão de Beleza Vanessa Dias da Silva</li>
          <li>CNPJ: 40.000.000/0001-00</li>
          <li>Av. Afonso Giovane da Silva, 00 - Penapolis - SP, Cep 16300-200</li>
          <li>vanessadias482@gmail.com Tel: (18) 99999-9999</li>
        </ul>
      </Adress>
    </Container>
  )
}

export default Footer;