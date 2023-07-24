import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

    const { user } = useContext(UserContext);
    return (
        <h4 className="text-center">Designed by {user.name} at {user.email}</h4>
    )
}

export default Footer;