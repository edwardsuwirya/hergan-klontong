import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand mx-auto" href="#">Hergan Mantul</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/payment"><i
                            className="fas fa-cart-arrow-down"></i> {this.props.qty}</Link>
                    </div>
                </div>

            </nav>
        )
    }
}

export default Header;