import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";


import { Header } from "../../componets/Header";
import { ButtonText } from "../../componets/ButtonText";
import { Section } from "../../componets/Sections";
import { Input } from "../../componets/Inputs";
import { Note } from "../../componets/Note";
export function Home() {
  return (
    <Container>
      <Brand>
        <h1>WhateverNotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minha Notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "node" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        {" "}
        <FiPlus /> Criar Nota
      </NewNote>
    </Container>
  );
}
