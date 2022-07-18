import gold from './assets/gold.png'
import silver from './assets/silver.png'
import bronze from './assets/bronze.png'

import AchievementsList from './AchievementsList';
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

const Achievements = () => {
    const [achievements, setAchievements] = useState([
        { img: gold, result: "1ère", date: "le 13 juin 2022", event: "The International", game:'/dota2', id: 1},
        { img: gold, result: "1ère", date: "le 25 août 2021", event: "The Battle Cup", game:'/dota2', id: 2},
        { img: bronze, result: "3ème", date: "le 3 janvier 2020", event: "The New Years Major", game:'/dota2', id: 3},
        { img: gold, result: "1ère", date: "le 14 août 2021", event: "LCS Summer 2021", game:'/league', id: 4},
        { img: silver, result: "2ème", date: "le 7 avril 2021", event: "Star League", game:'/league', id: 5},
        { img: gold, result: "1ère", date: "le 30 avril 2022", event: "The Fantasy Cup", game:'/overwatch', id: 6},
        { img: gold, result: "1ère", date: "le 13 mai 2022", event: "The Ultra Major", game:'/valorant', id: 7},
        { img: bronze, result: "3ème", date: "le 31 décembre 2021", event: "The Duel League", game:'/valorant', id: 8},
        { img: gold, result: "1ère", date: "le 15 mai 2022", event: "Smash Summit 13", game:'/smash', id: 9},
        { img: bronze, result: "3ème", date: "le 7 avril 2021", event: "Rocket League Championship Series", game:'/rocketleague', id: 10},
    ])

    const location = useLocation();
    useEffect(() => {
      console.log(location.pathname);
    });

    return ( 
        <section id="dotaAchievements" class="">

        <div class="text-center text-white mt-5">
            <h2>Nos Accomplissements</h2>
        </div>
        <br/><br/><br/>
        <div class="container-md ">
            <AchievementsList achievements = {achievements.filter((achievement) => achievement.game === location.pathname)}/>
            
            <ColoredLine color="white"/>

        </div>
        
    </section>  
     );
}
 
export default Achievements;