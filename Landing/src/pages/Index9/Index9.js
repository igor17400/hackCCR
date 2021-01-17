import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
import Network from "../../components/Network/Network"
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";

class Index9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 2 , idnm : "services", navheading: "Services" },
                { id: 3 , idnm : "features", navheading: "Features" },
                { id: 4 , idnm : "pricing", navheading: "Pricing" },
                { id: 5 , idnm : "team", navheading: "Team" },
                { id: 6 , idnm : "blog", navheading: "Blog" },
                { id: 7 , idnm : "contact", navheading: "Contact" }

            ],
            navClass : ""
        };
    }

    render() {
        return (
            <React.Fragment>

                <div className="account-home-btn d-none d-sm-block">
                    <Link to="/mypage" className="text-primary">
                        <i className={"pe-7s-angle-left text-white"} style={{fontSize: "5rem"}}></i>
                    </Link>
                </div>

                {/* section */}
                <Section/>

                {/* blog */}
                <Network/>

                {/* footer */}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Index9;