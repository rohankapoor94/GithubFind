import React from 'react'
import {Link} from 'react-router-dom'
const Navbar =({title,icon})=> {
        return (
            <nav className="navbar navbar-dark navbar-expand-md bg-dark mb-3">
               <Link style={{textDecoration: 'none'}}  className='nav-brand' active to='/'> <h3 style={{color:'white'}}>
                    <i  className={icon} />
                      &nbsp;{title}
                    </h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">   
                <ul  className='navbar-nav ml-auto'  id="collapsibleNavbar">
                  <li className="nav-item">
                    <Link  className='nav-link' active to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className='nav-link' to='/about'>About</Link>
                  </li>
                </ul>
                </div>
            </nav>
        )
}

export default Navbar
