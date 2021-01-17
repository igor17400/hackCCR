import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./ProcessBox";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          icon: "pe-7s-id",
          title: "Requisito de Idade",
          desc: "Ter entre 14 e 24 anos.",
        },
        {
          icon: "pe-7s-pen",
          title: "Requisito de Escolaridade",
          desc: "Estar matriculado ou ter concluído o ensino médio em escola pública.",
        },
        {
          icon: "pe-7s-cash",
          title: "Renda",
          desc: "Ter renda per capita (por pessoa) de até um salário mínimo e meio; Não ter vínculo empregatício",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Processo de Admissão"
            />

            <Row>
              <Col lg={6} className="text-center process-left-icon-1">
                <i className="pe-7s-angle-right"></i>
              </Col>
              <Col lg={6} className="text-center process-left-icon-2">
                <i className="pe-7s-angle-right"></i>
              </Col>
            </Row>
            <Row className="mt-5">
              <ProcessBox processes={this.state.processes} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
