import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from "./pricing-box";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          title: "Meta de Alcance",
          features: [
            { title: "Quantas costureiras:", value: "250" },
            { title: "Estado(s): ", value: "DF" },
            { title: "Bairro(s):", value: "Asa Sul e Asa Norte" },
          ],
        },
        {
          title: "Meta de conversão",
          features: [
            { title: "Taxa de conversão", value: "7,5%" },
            { title: "Meios de conversão", value: "coldcall e coldemail" },
            { title: "Controle de conversão", value: "CRM - Pipefy" },
          ],
        },
        {
          title: "Meta de marketing",
          price: 29.90,
          duration: "Mo",
          features: [
            { title: "Meio", value: "Vídeos e mensagens" },
            { title: "Quantidade de vídeos por mês", value: "5" },
            { title: "Meios: ", value: "Whatsapp" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-5" id="pricing">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Projetos"
              desc="Abaixo estão os projetos criados por você. Aqui você gerencia sua metas e as acompanha."
            />

            <Row className="mt-5">
              <h5 style={{textAlign: "center", fontSize: "32px"}}>Ensinar educação financeira para costureiras</h5>
            </Row>

            <Row className="mt-5">
              {/* pricing box */}
              <PricingBox pricings={this.state.pricings} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Pricing;
