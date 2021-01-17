import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import BlogBox from "./BlogBox";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          image: "assets/images/blog/img-3.jpg",
          category: "Falta 50% para completar",
          title: "Comunicação",
          desc:
            "Professor(a): Leandro Matos",
        },
        {
          image: "assets/images/blog/sales.jpg",
          category: "Falta 75% para completar",
          title: "Gestão de Tempo ",
          desc:
            "Professor(a): João Pedro Zanatta",
        },
        {
          image: "assets/images/blog/schedule.jpg",
          category: "Falta 5% para completar",
          title: "Organização",
          desc:
            "Professor(a): Amanda Pires",
        },
        {
          image: "assets/images/blog/img-2.jpg",
          category: "Falta 35% para completar",
          title: "Técnicas de apresentação",
          desc:
            "Professor(a): Amanda Pires",
        },
        {
          image: "assets/images/blog/img-1.jpg",
          category: "Curso Finalizado!",
          title: "Mindfullness",
          desc:
            "Professor(a): Bruno Loureiro",
        },
        {
          image: "assets/images/blog/emocional.jpg",
          category: "Curso Finalizado!",
          title: "Meditação",
          desc:
            "Professor(a): Fernanda Lima",
        },
      ],
    };
  }

  render() {
    return (
      <section className="section bg-light pt-5" id="blog">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Meus Cursos"
            desc="Aqui você gerencia os seus cursos, seu avanço e entende seus acertos e erros."
          />

          <Row className="mt-4">
            {/* blog box */}
            <BlogBox blogs={this.state.blogs} />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Blog;
