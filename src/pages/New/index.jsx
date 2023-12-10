import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { Header } from "../../componets/Header";
import { Section } from "../../componets/Sections";
import { Input } from "../../componets/Inputs";
import { Textarea } from "../../componets/Textarea";
import { NoteItem } from "../../componets/NoteItem";
import { Button } from "../../componets/Button";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescripition] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }
  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }
  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }
  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }
  async function handleNewNote() {
    if(!title){
      return alert("Faltou adicionar o campo Titulo!");
    }
if(newTag){
  return alert("Faltou adicionar o campo Marcadores!");
}
if(newLink){
  return alert("Faltou adicionar o campo Links!");
}

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });
    alert("Nota criada com sucesso!");
    navigate("/");
  }
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescripition(e.target.value)}
          />
          <Section title="Links Uteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              isnew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isnew
                placeholder="Novo Marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
