import { Link } from "react-router-dom"

const Confirmation = () => {
    return (  
        <section id="confirmation" class="mt-4 bg-white">
        <br/>
        <div class="container-lg mt-5">
          <div class="row">
            <div class="col-md-12 text-start text-fluid">
              <h1>
                <div id="confirmationText" class="display-2">Nous avons reçu votre demande d'inscription. <br/> Un membre de
                  notre équipe vous contactera bientôt.</div>
                <div class="display-5 text-muted d-lg-block"><br/>Merci de nous avoir contactés.</div>
                <Link to="/"><br/> Cliquez ici pour retourner à la page d'accueil.</Link>
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default Confirmation;