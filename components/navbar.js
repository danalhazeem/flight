import { useContext } from 'react'
import { useRouter } from 'next/router'
import UserContext from '@/contexts/user'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar() {
    const { user, setUser } = useContext(UserContext)
    const router = useRouter()

    let items = ['flights', 'bookings', 'register', 'login']

    if (user.token) {
        items = items.slice(0, 2)
    }

    const handleLogoutClick = (event) => {
        setUser({ token: null })
        window.localStorage.removeItem('fbs-user')
        router.push('/')
    }

    return (
        <nav className='d-flex justify-content-center justify-content-sm-end'>
            <ul className='d-flex list-unstyled align-items-center m-3'>
                {items.map((item) => <Navlink key={item} item={item} />)}
                {user.token ? <Logout handleLogoutClick={handleLogoutClick} /> : null}
            </ul>
        </nav>
    )
}

function Logout(props) {
    return (
        <li key='logout'>
            <button onClick={props.handleLogoutClick} className='btn btn-link link-dark text-decoration-none px-0 mx-0'>
                Logout
            </button>
        </li>
    )
}

function Navlink({ item }) {
    return (
        <li className='me-3'>
            <Link href={item === 'flights' ? '/' : `/${item}`} className='link-dark text-decoration-none' >
                {capitalize(item)}
            </Link>
        </li>
    )
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1)
}
