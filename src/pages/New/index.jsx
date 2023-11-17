import { Container, Form } from "./styles";
import { Header } from "../../componets/Header";
import { Section } from "../../componets/Sections";
import { Input } from "../../componets/Inputs";
import { Textarea } from "../../componets/Textarea";
import { NoteItem } from "../../componets/NoteItem";
import { Button } from "../../componets/Button";

import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />
          <Section title="Links Uteis">
            <NoteItem isNew placeholder="Novo Link" />
            <NoteItem value="https://google.com" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem isNew placeholder="REACT" />
              <NoteItem value="Novo Marcador" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
