import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class NetworkBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.Networks.map((Network, key) => (
          <Col key={key} lg={4}>
            <div className="Network-box mt-4 hover-effect">
              <img src={Network.image} className="img-fluid" alt="Network" />
              <div>
                <h4 className="mt-3">
                    {Network.title}
                </h4>
                <h5 className="mt-4 text-muted">{Network.category}</h5>
                <p className="text-muted">{Network.desc}</p>
                <div className="mt-3">
                  <Link to="#" className="read-btn">
                   Conectar
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default NetworkBox;
