import Cookies from "js-cookie";
import { Navigate } from "react-router";
//import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //let navigate = useNavigate();
    const useAuth = () => {
        const token = Cookies.get("token");
        if (token) {
          const requestOptions = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          }
          return fetch("https://api.staging.finnotech.ir/backoffice-finnotech-server/registeredClients", requestOptions)
            .then((res) => res.json())
            .then((json) => {
              if (json.success) {
                console.log(json);
                //<Navigate to="/data" />
                // setlogOutButton(false);
                return true;
              }
              //navigate('/data')
            })
            .catch((err) => {
              return false;
            });
        }
        else {
          return false
        }
      }
    const auth = useAuth();
    console.log(auth);
    return auth ? children : <Navigate to="/Login" />
  };
  export default PrivateRoute;