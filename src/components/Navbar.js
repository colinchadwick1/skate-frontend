import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <a href="/">Home</a>
      </Link>

      <Link to="/cites"> 
      <a href="/">Cities</a> 
      </Link>

      <Link to="/all-spots"> 
      <a href="/">All Spots</a> 
      </Link>

      <Link to="/new-spot"> 
      <a href="/">New Spot</a> 
      </Link>

      {isLoggedIn
        ? (<>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Link to="/signup"> <a href="/">Signup</a> </Link>
          <Link to="/login"> <a href="/">Login</a> </Link>

        </>)
      }
    </nav>
  );
}

export default Navbar;