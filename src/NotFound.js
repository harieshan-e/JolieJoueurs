import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found bg-white">
      <br/> <br/> <br/>  

      <div class="container-lg mt-5">
          <div class="row">
            <div class="col-md-12 text-start text-fluid">
              <h1>
                <div id="confirmationText" class="display-2">C'est gênant... <br/></div>
                <div class="display-5 text-muted d-lg-block"><br/>La page que vous recherchez est introuvable.</div>
                <Link to="/"><br/> Cliquez ici pour retourner à la page d'accueil.</Link>
              </h1>
            </div>
          </div>
        </div>
      
    </div>
  );
}
 
export default NotFound;