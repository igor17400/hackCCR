import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services1: [
        {
          title: "Programa de Confiança",
          desc:
            "Aprenda a desenvolver confiança e habilidades básicas. Abordando temas como autoconhecimento, inteligência emocional, protagonismo e empatia. ",
        },
        {
          title: "Programa de Independência",
          desc:
            "Forme um grupo, aborde um problema em sua comunidade e busque soluções. O que você vai aprender: trabalho em equipe, comunicação verbal, resolução de problemas, entre outras.",
        },
      ],
      services2: [
        {
          title: "Programa de Responsabilidade",
          desc:
            "Oportunidades de aprendizagem individual, baseada no trabalho em projetos ou em parceria com uma empresa. O que você vai aprender: Gestão do tempo e pontualidade, reconhecer e reportar problemas, entre outras.",
        },
        {
          title: "Estágio",
          desc:
            "Oportunidades de trabalho independente para desenvolver habilidades profissionais e fornecer um serviço a uma empresa ou organização parceira. O que você vai aprender: Responsabilidade compartilhada, comunicação profissional, dar e receber feedback, entre outras.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Programas fornecidos"
            />

            <Row xs="2" className="mt-4">
              {/* services box */}
              <ServiceBox services={this.state.services1} />
            </Row>

            <Row xs="2" className="mt-4">
              {/* service box */}
              <ServiceBox services={this.state.services2} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
