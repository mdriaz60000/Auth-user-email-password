import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children }) => {

const {user,lodding}= useContext(AuthContext)

// if (lodding) {
//   return  <span class="loading loading-spinner text-error"></span>
// }

if (user) {
    return children ;
}
    return <Navigate to='/login'></Navigate>

};

export default PrivetRoute;
