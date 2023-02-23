import UserContext from '@/contexts/user'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
    const [user, setUser] = useState({
        token: null,
    })

    useEffect(() => {
        const loggedInUserJSON = window.localStorage.getItem('fbs-user')
        if (loggedInUserJSON) {
            const user = JSON.parse(loggedInUserJSON)
            setUser(user)
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}
