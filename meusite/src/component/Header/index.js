import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <Link to="/">Filmaria</Link>
            </div>
        );
    }
}

export default Header