import { Container, Links, Content } from "./styles";
import { Button } from "../../componets/Button";
import { Header } from "../../componets/Header";
import { Section } from "../../componets/Sections";
import { Tag } from "../../componets/Tag";
import { ButtonText } from "../../componets/ButtonText";
import { api } from "../../services/api";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);

      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText
              title="Excluir Nota"
              onClick={handleRemove}
            ></ButtonText>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url}>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
