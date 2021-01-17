import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import NetworkBox from "./NetworkBox";

class Network extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Networks: [
                {
                    image: "assets/images/Network/hannah.jpg",
                    title: "Hannah Silva",
                    category:
                        "Sou harmoniosa e faço amizades facilmente.",
                    desc: "Habilidades: negócios",
                },
                {
                    image: "assets/images/Network/ivan.jpg",
                    title: "Breno Santana",
                    category:
                        "Trabalho bem em equipe, sou alegre e de fácil comunicação",
                    desc: "Habilidades: computação e marketing",
                },
                {
                    image: "assets/images/Network/nicolas.jpg",
                    title: "Filipe Alves",
                    category:
                        "Adoro fazer amizades e me envolver em projetos",
                    desc: "Habilidades: comunicação",
                },
                {
                    image: "assets/images/Network/vitoria.jpg",
                    title: "Vitoria Braga",
                    category:
                        "Trabalho bem em equipe e individualmente.",
                    desc: "Habilidades: computação",
                },
                {
                    image: "assets/images/Network/joao.jpg",
                    title: "João Barbosa",
                    category:
                        "Adoro ler e conhecer pessoas.",
                    desc: "Habilidades: comunicação",
                },
                {
                    image: "assets/images/Network/jessica.jpg",
                    title: "Jessica Souza",
                    category:
                        "Sou responsável, animada e adoro ouvir música.",
                    desc: "Habilidades: marketing",
                },
            ],
        };
    }

    render() {
        return (
            <section className="section bg-light pt-5" id="Network">
                <Container>
                    {/* section title */}
                    <SectionTitle
                        title="Rede de Conexão"
                        desc="Procure e adicione as pessoas a sua equipe."
                    />

                    <Row className="mt-4">
                        {/* Network box */}
                        <NetworkBox Networks={this.state.Networks} />
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Network;
