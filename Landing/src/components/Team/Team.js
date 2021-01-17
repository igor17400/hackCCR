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
          image: "assets/images/team/img-1.jpg",
          title: "Nicolle",
          desc: "CEO",
        },
        {
          image: "assets/images/team/fernanda.jpeg",
          title: "Fernanda",
          desc: "PRESIDENTE",
        },
        {
          image: "assets/images/team/bruno.jpeg",
          title: "Bruno",
          desc: "DESIGNER",
        },
        {
          image: "assets/images/team/igor.JPG",
          title: "Igor",
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
