import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
    const [user, setUser] = useContext(UserContext)
    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return(
        <>
        <header>
            <img id='logo' src='../img/logo.png' width='200px' />
            <nav>
                <ul>
                    <li><Link to='/'>Movie</Link></li>
                    <li><Link to='/games'>Game</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    { user === null && <li><Link to='/login'>Login</Link></li>}
                    { user && <li><a style={{cursor:'pointer'}} onClick={handleLogout}>Logout</a></li> } 
                </ul>
            </nav>   
        </header>
        </>
    )
}

export default Header