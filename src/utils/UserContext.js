import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy",
        email: "dumame@sa.com"
    }
})
UserContext.displayName = "UserContext";

export default UserContext;