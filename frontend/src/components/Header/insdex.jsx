import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return ( 
        <header className='header'>
            {/*logo*/}
            <div className='logo'>
                <Link to='/'>
                  <span className='logo-1'>M</span>
                  <span className='logo-2'>D</span>
                  <span className='logo-3'>X</span>
                </Link>
            </div>

            {/*Busca*/}

            <div className='search-bar'>
                <input type="text" placeholder='Buscar "apartamento"' />
                <div className='location'>
                    <button search-button>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    )
}