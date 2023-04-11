import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RedefinePassword from "../../components/RedefinePassword";
import { Container, Main } from "./styles";

const RedefinePasswordAccount = () => {
  const { newPasswordCode } = useParams();
  const data = newPasswordCode?.split(" ");
  const userId = data![0];

  return (
    <Container>
      <Header/>
      <Main>
        <RedefinePassword user={userId}/>
      </Main>
      <Footer/>
    </Container>
  );
}

export default RedefinePasswordAccount;
