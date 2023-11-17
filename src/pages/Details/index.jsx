import { Container, Links, Content } from "./styles";
import { Button } from "../../componets/Button";
import { Header } from "../../componets/Header";
import { Section } from "../../componets/Sections";
import { Tag } from "../../componets/Tag";
import { ButtonText } from "../../componets/ButtonText";

import { Link } from "react-router-dom";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota"></ButtonText>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos ipsa necessitatibus enim quis sunt excepturi voluptatum, sint quae saepe harum nihil tempora laudantium ipsam, incidunt facere nam esse similique.</p>
          <Section title="Links úteis">
            <Links>
              <li href="#"><a>item 1</a></li>
              <li href="#"><a>item 2</a></li>
              <li href="#"><a>item 3</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="JavaScript" />
          </Section>
          <Link to="/">
          
          <Button title="Voltar"/>
          </Link>
        </Content>
      </main>
    </Container>
  );
}
