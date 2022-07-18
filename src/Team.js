import arteezy from './assets/arteezy.jpg'
import ceb from './assets/ceb.jpg'
import jerax from './assets/jerax.jpg'
import topson from './assets/topson.jpg'
import timado from './assets/timado.jpg'

import faker from './assets/faker.jpg'
import bjergson from './assets/bjergson.jpg'
import doinb from './assets/doinb.png'
import perkz from './assets/perkz.jpg'
import uzi from './assets/uzi.jpg'

import babybay from './assets/baybay.jpg'
import asuna from './assets/asuna.jpg'
import sick from './assets/sick.png'
import tenz from './assets/tenz.jpg'
import wardell from './assets/wardell.jpg'

import xqc from './assets/xqc.jpg'
import dding from './assets/dding.jpg'
import gamsu from './assets/gamsu.jpg'
import super1 from './assets/super.png'
import profit from './assets/profit.jpg'

import mkleo from './assets/mkleo.jpeg'
import mew2king from './assets/mew2king.jpg'
import mang0 from './assets/mang0.jpg'

import jstn from './assets/jstn.jpg'
import daniel from './assets/daniel.jpg'

import TeamList from './TeamList'
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

const Team = () => {

    const [teams, setTeams] = useState([
        { name: 'Arteezy', description: "Arteezy, l'un des joueurs de Dota les plus célèbres au monde, est un pilier de la communauté depuis dix ans. Jouant le rôle de porteur, ses impressionnantes compétences mécaniques combinées à sa personnalité hilarante ont fait de lui le favori de nombreux fans.", image: arteezy, game: '/dota2', id: 1 },
        { name: 'Jerax', description: "Deux semaines seulement après avoir annoncé sa retraite, Jerax a fait son retour sur la scène compétitive pour rejoindre la nouvelle équipe de JolieJoueurs. En tant que vétéran qui a gagné sa part de tournois, il est le meilleur soutien que l'on puisse souhaiter.", image: jerax, game: '/dota2', id: 2 },
        { name: 'Ceb', description: "Capitaine de notre équipe, Ceb est le type de personne sur laquelle vous pouvez toujours compter pour vous soutenir. Toujours avec les bons mots à dire, et le discours parfait pour chaque moment, aucune équipe ne pourrait fonctionner sans un joueur comme lui.", image: ceb, game: '/dota2', id: 3 },
        { name: 'Topson', description: "Il peut sembler humble et tranquille à l'extérieur, mais dans le jeu, Topson est l'un des mid laners les plus mortels et les plus redoutés que le jeu ait à offrir. Ses compétences mécaniques et le grand nombre de personnages qu'il maîtrise font de lui une force que toute équipe serait terrifiée d'affronter.", image: topson, game: '/dota2', id: 4 },
        { name: 'Timado', description: "Sans doute le meilleur joueur du continent sud-américain, Timado s'est fait un nom sur la scène de Dota 2. Issu d'un milieu modeste, il passait tout son temps à fréquenter le cybercafé de son quartier, où il a affiné ses compétences avant d'entrer sur la scène compétitive à l'âge de 12 ans.", image: timado, game: '/dota2', id: 5 },

        { name: 'Faker', description: "Largement considéré comme le meilleur joueur de League of Legends de tous les temps, Faker est réputé pour ses compétences mécaniques élevées et son pool de champions extrêmement polyvalent. Il est connu pour avoir réussi à sortir vainqueur de scénarios presque impossibles, grâce à ses jeux spectaculaires.", image: faker, game: '/league', id: 6 },
        { name: 'Bjergsen', description: "Le Danois Bjergsen est un membre extrêmement précieux de notre équipe. En tant qu'ancien entraîneur, ses compétences en matière d'arbitrage et de leadership sont inégalées et sont essentielles au succès de l'équipe.", image: bjergson, game: '/league', id: 7 },
        { name: 'Doinb', description: "Originaire de Corée du Sud, Doinb a été deux fois lauréat du prix du meilleur joueur, le premier joueur à le faire. Il a prouvé qu'il avait mérité ces honneurs, en fournissant constamment des performances étonnantes.", image: doinb, game: '/league', id: 8 },
        { name: 'Perkz', description: "Originaire de Croatie, Perkz est considéré comme l'un des meilleurs joueurs d'Europe. Avec ses excellentes performances et son grand nombre de victoires en tournoi, il est difficile d'argumenter autrement.", image: perkz, game: '/league', id: 9 },
        { name: 'Uzi', description: "Uzi est originaire de Chine, et il est largement considéré comme le plus grand joueur de carry de tous les temps. Après avoir mis fin à sa carrière pendant deux ans en raison de problèmes de santé, il a rejoint l'équipe en tant que nouveau membre et est impatient de prouver qu'il a toujours sa place au sommet.", image: uzi, game: '/league', id: 10 },

        { name: 'Babybay', description: "Babybay s'est révélé être l'un des joueurs de Valorant les plus explosifs au monde. Après une brève retraite, il est revenu sur la scène compétitive et est impatient de se mettre au travail.", image: babybay, game: '/valorant', id: 11 },
        { name: 'Asuna', description: "La jeune pro ukrainienne Asuna a fait irruption sur la scène professionnelle récemment, et est devenue une figure à suivre avec son jeu passionnant.", image: asuna, game: '/valorant', id: 12 },
        { name: 'Sick', description: "Sick est un joueur américain qui est un ancien joueur professionnel de Counter-Strike : Global Offensive. Il a réussi à transposer ses compétences à Valorant et est l'un des joueurs les plus doués du moment.", image: sick, game: '/valorant', id: 13 },
        { name: 'TenZ', description: "Le Canadien TenZ est l'une des plus grandes stars de Valorants. Il a été le premier à atteindre le rang le plus élevé du jeu, mais ses compétences n'ont fait que croître depuis lors. ", image: tenz, game: '/valorant', id: 14 },
        { name: 'Wardell', description: "Wardell est un joueur très divertissant de Toronto, au Canada. Ses streams sur Twitch lui ont valu un grand nombre de fans, ainsi que son haut niveau de compétence en jeu.", image: wardell, game: '/valorant', id: 15 },

        { name: 'xQc', description: "Streamer populaire sur twitch, mais aussi joueur canadien d'overwatch hautement qualifié xQc est un joueur professionnel canadien originaire de Montréal. Bien qu'il soit un personnage controversé, il s'est amendé dans la communauté d'Overwatch et est un fier membre de JolieJoueurs.", image: xqc, game: '/overwatch', id: 16 },
        { name: 'DDing', description: "Le sud-coréen Dding est un joueur de dps hautement qualifié. Après une brève pause du jeu professionnel, il est heureux de faire son retour avec JolieJoueurs. ", image: dding, game: '/overwatch', id: 17 },
        { name: 'Gamsu', description: "Gamsu, originaire de Corée du Sud, a été tour à tour joueur professionnel de League of Legends et d'Overwatch, étant très doué dans les deux jeux. Pour l'instant, il est engagé dans notre équipe d'Overwatch, et est l'un des meilleurs joueurs de tank.", image: gamsu, game: '/overwatch', id: 18 },
        { name: 'Super', description: "Super est un célèbre joueur de Tank américain. Tout au long de sa carrière, Super est devenu célèbre pour son style de jeu dominant et agressif.", image: super1, game: '/overwatch', id: 19 },
        { name: 'Profit', description: "L'un des joueurs les plus réputés de la scène Overwatch, le Profit sud-coréen a gagné sa place au sommet de la scène compétitive grâce à son expertise des personnages DPS.", image: profit, game: '/overwatch', id: 20 },

        { name: 'MKLeo', description: "MkLeo et parfois Leo, est un joueur professionnel mexicain de Super Smash Bros. Il est largement considéré comme le meilleur joueur de Super Smash Bros. Ultimate au monde, et est mortel avec son personnage principal, Byleth.", image: mkleo, game: '/smash', id: 21 },
        { name: 'Mew2king', description: 'Mew2King est un joueur professionnel américain de Super Smash Bros. originaire de Cinnaminson, dans le New Jersey. Il a remporté plus de 70 tournois au cours de sa carrière, principalement dans Super Smash Bros. Melee.', image: mew2king, game: '/smash', id: 22 },
        { name: 'Mang0', description: "Mang0, est un joueur professionnel américain de Super Smash Bros. Melee et un streamer de Norwalk, en Californie. Connu pour son style de jeu agressif et risqué, il est largement considéré comme l'un des meilleurs joueurs de tous les temps.", image: mang0, game: '/smash', id: 23 },

        { name: 'Jstn', description: "Jstn est un jeune Américain qui est considéré comme l'un des meilleurs joueurs de rocket league au monde. Il a régulièrement remporté plusieurs tournois majeurs et a déjà accumulé des centaines de milliers de dollars de prix. ", image: jstn, game: '/rocketleague', id: 24 },
        { name: 'Daniel', description: "Daniel, qui n'a que 15 ans, est un joueur professionnel américain de la Rocket League. Même à son jeune âge, il est l'un des meilleurs joueurs du monde et il a encore de la marge pour devenir encore meilleur.", image: daniel, game: '/rocketleague', id: 25 },
      ])

      const location = useLocation();
      useEffect(() => {
        console.log(location.pathname);
      });

      let game = "Dota 2";

      if (location.pathname === '/dota2') {
        game = "Dota 2"
      } else if (location.pathname === '/league') {
        game = "League of Legends"
      } else if (location.pathname === '/overwatch') {
        game = "Overwatch"
      } else if (location.pathname === '/valorant') {
        game = "Valorant"
      } else if (location.pathname === '/smash') {
        game = "Super Smash Bros"
      } else if (location.pathname === '/rocketleague') {
        game = "Rocket League"
      } 
    return ( 
        <section id="dotaTeam" class="mt-5 text-white">
            <br/>
            <div class="text-center text-white mt-5">
                <h2>Notre Équipe {game}</h2>
            </div>

            <div class="container-xl">
                
                <TeamList teams = {teams.filter((team) => team.game === location.pathname)}/>
                <ColoredLine color="white"/>
            </div>
            
        </section>
    );
}
 
export default Team;