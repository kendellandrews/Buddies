import {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../store/authContext'


const styleActiveLink = ({ isActive }) => {
    return {
        color: isActive ? '#f57145' : ''
    }
}

const Header = () => {
const authCtx = useContext(AuthContext)

return (
    <header className='nav'>
        
        <nav>
        <div className='flex-row'>
            <h2>BUDDIES</h2>
        </div>
            {
            authCtx.token ? (
                <h2>BUDDIES</h2>,
                <ul className='main-nav'>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/cart'> Cart </Link>
                    </li>
                    <li>
                        <Link to='/'> Products </Link>
                    </li>
                    <li>
                        <button className='logout-btn' onClick={() => authCtx.logout()}> Logout </button>
                    </li>
                </ul>
            ) : (
                <ul className='main-nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/auth'>Login or Sign Up</Link>
                    </li>
                </ul>
            )
        }
    </nav>
</header>
)
}

export default Header
    