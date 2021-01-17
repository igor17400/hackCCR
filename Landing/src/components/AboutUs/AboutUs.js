import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="features">
                    <Container>
                        <Row className="vertical-content">
                            <Col lg={5}>
                                <div className="features-box">
                                    <h3>DESCRIÇÃO DA PLATAFORMA</h3>
                                    <p className="text-muted web-desc">
                                        Prepare-se para o mercado de trabalho
                                        com a XXX, comece aprendendo sobre
                                        competências socioemocionais, a seguir
                                        conecte-se com outros jovens, escolha um
                                        problema e proponha uma solução.
                                        Participe de programas de formação
                                        individual em empresas parceiras.
                                        Durante toda a jornada tenha o suporte
                                        de instrutores e mentores.
                                    </p>
                                    <ol className="text-muted list-unstyled mt-4 features-item-list">
                                        <li className="">
                                            Modelo híbrido de educação (online e
                                            off line).
                                        </li>
                                        <li className="">
                                            Desenvolva projetos de aprendizado
                                            com suporte de instrutores.
                                        </li>
                                        <li className="">
                                            Mentorias com profissionais das
                                            empresas parceiras.
                                        </li>
                                        <li className="">
                                            Participe de atividades nas empresas
                                            parceiras.
                                        </li>
                                        <li className="">
                                            Bolsa auxílio/ ajuda financeira,
                                            auxílio transporte.
                                        </li>
                                    </ol>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="features-img features-right text-right">
                                    <img
                                        src="assets/images/networking.jpg"
                                        alt="networking"
                                        className="img-fluid"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default AboutUs;
