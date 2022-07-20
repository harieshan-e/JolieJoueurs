const Join = () => {
    return ( 
        <section id="join" class="bg-light mt-5">
          <br/>      <br/>       <br/>
      <div class="container-lg ">
  
        <div class="text-center ">
          <h2>Rejoignez une Équipe</h2>
          <p class="lead mt-4">Vous pensez avoir ce qu'il faut pour rejoindre l'une de nos équipes ? <br/> Remplissez le formulaire suivant pour vous inscrire à l'un de nos tryouts !</p>
        </div>
        <div class="row justify-content-center my-5">
          <div class="col-lg-6">
  
            <form name="bookAppointment" action="/confirmation">
              <label for="name" class="form-label fs-5">Nom:</label>
              <div class="input-group mb-4">
                <span class="input-group-text">
                  <i class="bi bi-person-fill text-secondary"></i>
                </span>
                <input type="text" class="form-control" placeholder="Prénom" aria-label="FirstName" id="firstName" required onInvalid={e => e.target.setCustomValidity("Veuillez remplir ce champ.")}onInput={e => e.target.setCustomValidity("")}/>
                <input type="text" class="form-control" placeholder="Nom de Famille" aria-label="LastName" id="lastName" required onInvalid={e => e.target.setCustomValidity("Veuillez remplir ce champ.")}onInput={e => e.target.setCustomValidity("")}/>
              </div>
  
              <label for="email" class="form-label fs-5">Courriel et Numéro de Téléphone :</label>
              <div class="input-group mb-4">
                <span class="input-group-text">
                  <i class="bi bi-envelope-fill text-secondary"></i>
                </span>
                <input type="text" id="email" class="form-control" placeholder="e.g. nom@exemple.com" required onInvalid={e => e.target.setCustomValidity("Veuillez remplir ce champ.")}onInput={e => e.target.setCustomValidity("")}/>
                <span class="input-group-text">
                  <i class="bi bi-telephone-fill"></i>
                </span>
                <input type="text" id="phone" class="form-control fs-5" placeholder="e.g. 999-999-9999" required onInvalid={e => e.target.setCustomValidity("Veuillez remplir ce champ.")}onInput={e => e.target.setCustomValidity("")}/>
              </div>
  
              <label for="serviceSelection" class="form-label fs-5">Quel équipe aimeriez-vous joindre?</label>
              <div class="mb-4 input-group">
                <span class="input-group-text">
                  <i class="bi bi-controller"></i>
                </span>
                <select class="form-select" id="serviceSelection" required onInvalid={e => e.target.setCustomValidity("Veuillez remplir ce champ.")}onInput={e => e.target.setCustomValidity("")}>
                  <option value="select" disabled selected>Sélectionnez un Équipe</option>
                  <option value="examen">Dota 2</option>
                  <option value="nettoyage">League of Legends</option>
                  <option value="extraction">Overwatch</option>
                  <option value="blanchiment">Valorant</option>
                  <option value="canalRadiculaire">Super Smash Bros Ultimate</option>
                  <option value="implants">Rocket League</option>
                </select>
              </div>
  
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="fs-5">Pourquoi pensez-vous que vous feriez on bon membre de l'equipe?</label>
                <textarea class="form-control" id="goodMember" rows="3" required onInvalid={e => e.target.setCustomValidity("Veuillez remplir ce champ.")}onInput={e => e.target.setCustomValidity("")}></textarea>
              </div>
              <div class="my-4 text-center">
                <button id="submitApp" type="submit" class="btn-lg btn-secondary" style={{backgroundColor: "#ff8906", color: "black"}}>Soumettre</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer class="bg-dark text-center text-white">
        <div class="text-center p-3 text-white">
        © 2022 Copyright: JolieJoueurs
        </div>
    </footer>
    </section>
    );
}
 
export default Join;