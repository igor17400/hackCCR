import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section
                    className="section section-lg home-half"
                    id="home"
                    style={{
                        backgroundImage: `url(assets/images/mountain.jpeg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
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
                                            A JORNADA
                                        </h1>
                                        <p className="pt-3 home-desc">
                                        Utilizando o conceito “learning by doing”, em 4 módulos, 
                                        são desenvolvidos atributos e habilidades não técnicas (soft skills) 
                                        que impulsionarão a vida profissional do jovem.
                                        </p>
                                        <br/>{""}
                                        <p>
                                            1 - Time management + punctuality 
                                        </p>
                                        <p>
                                            2 - Professional orientation 
                                        </p>
                                        <p>
                                            3 - Having a team work ethic 
                                        </p>
                                        <p>
                                            4 - Verbal communication
                                        </p>
                                        <p>
                                            5 - Problem-solving
                                        </p>
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
