import missionImage from './assets/cheering.jpg'

const Mission = () => {
    return (  
    <section class="bg-light mt-5" id="mission">

    <div class="text-center">
    <br/>      <br/>      <br/>
      <h2>Notre Mission</h2>
    </div>
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-6 mt-5 ">
          <img src={missionImage} class="mission" alt="missionImage"/> 
        </div>
      
        <div class="col-lg-6 mt-5">
          <p class="fs-5">
          Nous sommes une organisation esports de renommée mondiale qui présente certains des meilleurs joueurs du monde dans plusieurs jeux compétitifs. Nous jouons sur les plus grandes scènes du monde non seulement pour concourir pour les plus grands honneurs dans le monde du jeu, mais aussi pour offrir à nos fans un spectacle qu'ils n'oublieront jamais. <br/><br/>

Nous avons été fondés dans le but de rassembler les meilleurs joueurs du monde et de forger une culture positive avec notre équipe et nos fans. Être un Jolie Joueur signifie beaucoup plus que d'être simplement Jolie. Nous avons cultivé un environnement gagnant, où nos coéquipiers et nos adversaires sont traités avec le même respect.  <br/>
          
          </p>
        </div>
      </div>
    </div>
    <br/>
  </section>
    );
}
 
export default Mission;