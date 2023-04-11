import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SendEmailForgotPassword from "../../components/SendEmailForgotPassword";
import { Container, Main } from "./styles";

const ForgotPassword = () => {
  return (
    <Container>
      <Header/>
      <Main>
        <SendEmailForgotPassword/>
      </Main>
      <Footer/>
    </Container>
  );
}

export default ForgotPassword;
