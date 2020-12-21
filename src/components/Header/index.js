import React from 'react';
import './style.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';



const Header = (props) => {
    const type = props.type;
    const token = props.token;

    //console.log(token);

if (type === 'admin') {
    return(
        <div className="holder">
            <header className="header">
                <nav className="headerMenu">
                    <Link to="/device_list"><img src={logo} alt="logo"/></Link>
                    <Link to="/device_list">Device List</Link> 
                </nav>
                <nav className="headerMenu">
                    <Link to="/create_device">Create Device</Link>
                    <button onClick={props.handleLogout}>Logout</button>
                </nav>
            </header>
        </div>
    )} else {
        return(
            <div className="holder">
                <header >
                        { token ? 
                            <div className="header">
                            <nav className="headerMenu">
                                <Link to="/device_list"><img src={logo} alt="logo"/></Link>
                                <Link to="/device_list">Device List</Link> 
                            </nav>
                            <nav className="headerMenu">
                                <button className="logout" onClick={props.handleLogout}>Logout</button>
                            </nav>
                            </div>
                            :
                            <div className="header">
                            <nav className="headerMenu">
                                <Link to="/"><img src={logo} alt="logo"/></Link>
                            </nav>
                            <nav className="headerMenu">
                                <Link to="/">Login</Link> 
                            </nav> 
                            </div>
                        }
                </header>
            </div>
        )  
    }
}

export default Header;