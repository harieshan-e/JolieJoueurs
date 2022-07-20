import dota from '../assets/dota2.jpg'
import league from '../assets/league.jpg'
import overwatch from '../assets/overwatch.jpg'
import rocketleague from '../assets/rocketleague.jpg'
import smash from '../assets/smash.png'
import valorant from '../assets/valorant.jpg'
import { Link } from "react-router-dom"

const EquipesEn = () => {
    return (  
        <section id="teams" class="bg-light mt-5">
          <br/>      <br/>      <br/>
        <div class="text-center mb-5">
          <h2>Our Teams</h2>
        </div>
        <div class="row row-cols-1 row-cols-xl-3 g-4 mt-4">
          <div class="col">
            <div class="textcontainer">
              <Link className = "link" to="/dota2"> 
                <img src={dota} class="logos" id="dota"  alt=""/>
                <div class="overlay">
                  <div class="hovertext">Dota 2</div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="textcontainer">
              <Link className = "link" to="/league"> 
                <img src={league} class="logos" id="league" alt=""/>
                <div class="overlay">
                  <div class="hovertext">League of Legends</div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="textcontainer">
              <Link className = "link" to="/overwatch"> 
                <img src={overwatch} class="logos" id="overwatch" alt=""/>
                <div class="overlay">
                  <div class="hovertext">Overwatch</div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="textcontainer">
              <Link className = "link" to="/valorant"> 
                <img src={valorant} class="logos" id="valorant" alt=""/>
                <div class="overlay">
                  <div class="hovertext">Valorant</div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="textcontainer">
              <Link className = "link" to="/smash"> 
                <img src={smash} class="logos" id="smash" alt=""/>
                <div class="overlay">
                  <div class="hovertext">Super Smash Bros. Ultimate</div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col">
            <div class="textcontainer">
              <Link className = "link" to="/rocketleague"> 
                <img src={rocketleague} class="logos" id="rocket" alt=""/>
                <div class="overlay">
                  <div class="hovertext">Rocket League</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <br/>
      </section> 
    );
}
 
export default EquipesEn;