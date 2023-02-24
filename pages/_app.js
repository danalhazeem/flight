import { useEffect, useState } from 'react'
import UserContext from '@/contexts/user'
import Navbar from "@/components/navbar"
import '@/styles/globals.css'

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
            <Navbar />
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}
