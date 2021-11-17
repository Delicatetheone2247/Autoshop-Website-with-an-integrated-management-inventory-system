import { useState } from "react/cjs/react.development";
import Table from "./Table";

export default function Dashboard(){
    const [tier, setTier] = useState(false);
    const [rim, setRim] = useState(false);
    const [Shelf, setShelves] = useState(false);
    
    return (

        
    <div id="Dashboard">
  
        <div id="SidebarMenu">
        <nav class="sidebar">
        <div class= "logo2"><img src= "zn-autocenter-logo.png"></img></div>
         </nav>
                  

                    <a>
                        <span class="icon"><ion-icon name="home-outline">
                        </ion-icon></span>
                        <span class="title">Hjem</span>
                    </a>

                <a href="#" onClick={() => { setTier(true); setRim(false); }}>
                        <span class="icon"></span>
                        <span class="title">Dæk</span>
                    </a>

                    <a href="#" onClick={() => { setRim(true); setTier(false); }}>
                        <span class="icon"></span>
                        <span class="title">Fælge</span>
                    </a>

                    <a href="#" onClick={() => {setShelves(true); setRim(false); setTier(false); }}>
                        <span class="icon"></span>
                        <span class="title">Hylder</span>
                    </a>


                    <a href="#" >
                        <span class="icon"></span>
                        <span class="title">Brugeradministration</span>
                    </a>

                    <a href="#">
                        <span class="icon"></span>
                        <span class="title">Log Ud</span>
                    </a>
            </div>

           

            {tier ? <div id="Tier-table">
                <Table tableName="Dæk ID#"/>
            </div> : null}

            {rim ? <div id="Tier-table">
                <Table tableName="Fælge ID#"/>
            </div> :  null}
            
            {Shelf ? <div id="Shelf ID#">
                <Table tableName="Dæ ID#"/>
                <Table tableName="Fæl ID#"/>
            </div> :  null}
            
          
    </div>

    
    );
}