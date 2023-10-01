import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Home = () => {

const  authInfo = useContext(AuthContext)
console.log(authInfo)
    return (
        <div>
            home
        </div>
    );
};

export default Home;