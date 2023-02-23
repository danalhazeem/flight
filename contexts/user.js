const { createContext } = require("react")

const UserContext = createContext({
    user: {
        token: null,
    },
    setUser: () => {},
})

export default UserContext