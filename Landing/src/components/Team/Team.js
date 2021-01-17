import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import TeamBox from "./TeamBox";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          image: "assets/images/team/nicolle.jpeg",
          title: "Nicolle Oliveira",
          desc: "Business",
        },
        {
          image: "assets/images/team/fernanda.jpeg",
          title: "Fernanda Bing",
          desc: "Entusiasta em educação/inclusão",
        },
        {
          image: "assets/images/team/bruno.jpeg",
          title: "Bruno Franzoni",
          desc: "UX/UI Designer",
        },
        {
          image: "assets/images/team/igor.JPG",
          title: "Igor Lima",
          desc: "DESENVOLVEDOR",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-4" id="team">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Equipe"
              desc="Essas são as pessoas que idealizaram a ideia e lutam todos os dias para que ela aconteça."
            />

            <Row className="mt-5">
              {/* team box */}
              <TeamBox teams={this.state.teams} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
