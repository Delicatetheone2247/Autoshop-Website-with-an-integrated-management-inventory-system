import MainPage from "./MainPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Login() {
return (
<div id="TopHeader">

      <div id="Login">

                <div id = "TopInfo">
                  <ul>
                    <div id ="infotlf"><li>32137175</li>
                    <li><a href="mailto:info@znautocenter.dk">info@znautocenter.dk</a></li>
                    </div>
                  </ul>
                </div>
      
      <button id="loginButton"> <Link to="/MainPage">Login</Link></button>
      </div>


</div>
  );
}



function Home() {
  return <h2>MainPage</h2>;
}




//<MainPage />