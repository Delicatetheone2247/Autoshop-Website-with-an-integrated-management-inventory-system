

import kontakt from "./Kontakt";
import ViTilbyder from "./ViTilbyder";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Header(){
  return (
  
    <div id="header">
      
      

            <div id= "Navigation">
            <div id="logo"><img src= "zn-autocenter-logo.png"></img></div>
            <nav>
            <ul>
                      <li><a href="#">FORSIDE</a></li>
                      <li><Link to ="/ViTilbyder"> VI TILBYDER</Link> </li>
                      <li><a href="https://booking.au2booking.dk/workshop/9f4d42beac6a470fba9c2e2a0580edf5/welcome">BOOK TID</a></li>
                      <li><Link to ="/Kontakt"> KONTAKT</Link> </li>

              </ul>
            </nav>
            </div>


        <div id="header-image-menu">
        <img src="teknicar-daek-forside.png"></img>
        </div>

    </div>
  );
}


function Home() {
  
  return <h2>ViTilbyder</h2>;
  
}





