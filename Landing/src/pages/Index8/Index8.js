import React, { Component } from 'react';

import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from './section';
import Service from "../../components/Service/service";
import AboutUs from "../../components/AboutUs/AboutUs";
import WebsiteDesc from "../../components/WebsiteDesc/WebsiteDesc";
import Pricing from "../../components/Pricing/pricing";
import Team from '../../components/Team/Team';
import Process from "../../components/Process/Process";
import Testimonials from "../../components/Testimonials/Testimonials"
import GetStart from "../../components/GetStart/GetStart"
import Blog from "../../components/Blog/Blog"
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";

class Index8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 2 , idnm : "services", navheading: "Programas" },
                { id: 3 , idnm : "features", navheading: "Plataforma" },
                { id: 4 , idnm : "team", navheading: "Time" },
                { id: 5 , idnm : "contact", navheading: "Contato" }

            ],
            navClass : ""
        };
    }

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} />

                {/* section */}
                <Section/>

                {/* services */}
                <Service  sectionClass=""/>

                {/* about us */}
                <AboutUs/>

                {/* team */}
                <Team/>

                {/* process */}
                <Process/>

                {/* get started */}
                <GetStart/>

                {/* contact */}
                <Contact/>

                {/* social */}
                <Social />

                {/* footer */}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Index8;