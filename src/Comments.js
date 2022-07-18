import CommentsList from "./CommentsList";
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

const Comments = () => {
    const [comments, setComments] = useState([
        { author: 'leoleopard', body: "Je ne peux pas croire qu'ils ont seulement obtenu la troisième place pour le New Years Major !", time: '12:45pm', game:'/dota2', id: 1 },
        { author: 'gamergirl33t', body: "Arteezy est mon joueur preferé !", time: '2:45pm', game:'/dota2', id: 2 },
        { author: 'haripotter', body: "J'aimerais être aussi bon que Faker !", time: '3:25am', game:'/league', id: 3 },
        { author: 'IIPrisonMikeII', body: "Cela fait un moment que je n'ai pas vu xQc jouer à overwatch, est-il toujours bon ?", time: '5:22pm', game:'/overwatch', id: 4 },
        { author: 'willby3rs', body: "J'adore regarder les streams de Wardell. Il est tellement drôle !", time: '12:55pm', game:'/valorant', id: 5},
        { author: 'so1aireSun', body: "Les joueurs de Smash sont si bons dans ce qu'ils font, je ne peux pas imaginer combien de temps il leur a fallu pour devenir aussi bons.", time: '4:52pm', game:'/smash', id: 6 },
        { author: 'drizzy', body: "Je ne peux pas croire à la jeunesse de tous les membres de cette équipe !", time: '7:36am', game:'/rocketleague', id: 7 },
    ])

    const location = useLocation();
      useEffect(() => {
        console.log(location.pathname);
      });


      

    return ( 
        <section id="comments" class="mt-5">
            <div class="text-center text-white 5">
                <h2>Commentaires</h2>
            </div>
            <br/><br/><br/>
            
            <div class="container-md">
                <div className="row-md-12">
                <label className="text-white fs-5" >Entrez Votre Nom</label>
                </div> 
                <div className="row-md-12">
                <input type="text"></input>
                </div> 
                
                <label className="text-white fs-5">Quoi Voulez Vous Dire?</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                <div class="my-4 text-end">
                <button id="submitApp" class="btn-lg btn-secondary" onclick={() =>
                setComments(comments => [...comments, { author: 'adfsdf', body: 'lorem ipsum...', time: '2:123', game:'/dota2', id: 8 }
                ])

                }>Soumettre</button>
                </div>
              
                <CommentsList comments = {comments.filter((comment) => comment.game === location.pathname)}/>
            </div>
            <footer class="bg-dark text-center text-white">
            <div class="text-center p-3 text-white">
            © 2022 Copyright: JolieJoueurs
            </div>
        </footer>
    </section>
     );
}
 
export default Comments;