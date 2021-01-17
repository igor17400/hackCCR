import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
  state = {
    links: [
      {
        title: "DORSIN",
        child: [
          { link: "#", title: "Home" },
          { link: "#", title: "Sobre nós" },
          { link: "#", title: "Oportunidades" },
        ],
      },
      {
        title: "Informação",
        child: [
          { link: "#", title: "Termos e condições" },
          { link: "#", title: "Sobre nós" },
          { link: "#", title: "Histórias" },
          { link: "#", title: "Motivações" },
        ],
      },
      {
        title: "Apoio",
        child: [
          { link: "#", title: "FAQ" },
          { link: "#", title: "Contato" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              {this.state.links.map((fLink, key) => (
                <Col key={key} lg={3} className="mt-4">
                  <h4>{fLink.title}</h4>
                  <div className="text-muted mt-4">
                    <ul className="list-unstyled footer-list">
                      {fLink.child.map((fLinkChild, key) => (
                        <li key={key}>
                          <Link to={fLinkChild.link}>{fLinkChild.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}

              <Col lg={3} className="mt-4">
                <h4>Newslatter</h4>
                <Form className="subscribe">
                  <input
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                  <Link to="#" className="submit">
                    <i className="pe-7s-paper-plane"></i>
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </footer>

      </React.Fragment>
    );
  }
}

export default Footer;
