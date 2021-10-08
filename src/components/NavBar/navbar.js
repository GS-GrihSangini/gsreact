import React from "react";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import './navbar.css'

class NavBar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems" >
                <h1 className="navbar-logo">GS:GrihSangini

                {/* TODO : Logo insert kardena man kare toh, abhi toh react ka logo hai isiliye nhi daal rhe */}
                {/* <i className="fab fa-react "></i> */}

                </h1>
                <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i></div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className='nav-links' key={index}><a className={item.cName} href={item.link}> {item.title} </a></li>
                        )
                    })}
                </ul>
                <Button>Sign-</Button>
            </nav>
        )
    }
}

export default NavBar