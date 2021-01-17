import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Section extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="section bg-home home-half" id="home">
        <div className="bg-overlay"></div>
        <div className="display-table">
          <div className="home-cell-bottom">
          <Container>
                <Row>
                  <Col
                    lg={{ size: 8, offset: 2 }}
                    className="text-white text-center"
                  >
                    <h1 className="home-title">
                      Aqui você gerencia os seus cursos, conexões e metas.
                    </h1>
                    <Link to="#" className="btn btn-dark mt-4">
                      Editar Perfil
                    </Link>{" "}

                    <Link to="/conexoes" className="btn btn-dark mt-4">
                      Fazer conexões
                    </Link>{" "}
                  </Col>
                </Row>
              </Container>
          </div>
        </div>
      </section>
    </React.Fragment>
    );
  }
}

export default Section;
