import missionImage from '../assets/cheering.jpg'

const MissionEn = () => {
    return (  
    <section class="bg-light mt-5" id="mission">

    <div class="text-center">
    <br/>      <br/>      <br/>
      <h2>Our Mission</h2>
    </div>
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-6 mt-5">
          <img src={missionImage} class="mission" alt="missionImage"/> 
        </div>
      
        <div class="col-lg-6 mt-5">
          <p class="fs-5">
          We are a world renowned esports organizations featuring some of the best players in the world in several competitive games. We play on the worlds biggest stages not only to compete for the highest honors in the gaming world, but to give our fans a show they'll never forget. <br/><br/>

          We were founded with the goal of bringing together the worlds best players and forging a positive culture with both our team and our fans. To be a Jolie Gamer means so much more that just being Jolly. We have cultivated a winning environment, where our teammates and opponents get treated with equal respect.   <br/>

          </p>
        </div>
      </div>
    </div>
    <br/>
  </section>
    );
}
 
export default MissionEn;