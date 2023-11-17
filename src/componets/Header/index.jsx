import {RiShutDownLine} from "react-icons/ri"
import { Container, Profile,Logout } from "./styles";



export function Header() {
  return (
    <Container>

      <Profile to="/profile">
        
        <img
          src="https://github.com/samuelmuleu.png"
          alt="Foto do usuario gibthub"
        />
        <div>
          <span>Bem Vindo</span>
          <strong>Samuel Muleu</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  );
}
