import React, { Component } from "react";
import { Container, Row, Col, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Section Title
import SectionTitle from "../common/section-title";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Dúvidas"
              desc="Para qualquer dúvida de como funciona o nosos processo, não exita em entrar em contato."
            />

            <Row>
              <Col>
                <div className="custom-form mt-4 pt-4">
                  <div id="message"></div>
                  <AvForm name="contact-form" id="contact-form">
                    <Row>
                      <Col lg={6}>
                        <FormGroup className="mt-2">
                          <AvField
                            required
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Nome*"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={6}>
                        <FormGroup className="mt-2">
                          <AvField
                            required
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="E-mail*"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-2">
                          <AvField
                            required
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Assunto."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-2">
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Menssagem."
                          ></textarea>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="text-end">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-primary"
                          value="Enviar"
                        />
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </AvForm>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
