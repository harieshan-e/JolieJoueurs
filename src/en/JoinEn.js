const JoinEn = () => {
      return ( 
          <section id="join" class="bg-light mt-5">
            <br/>      <br/>       <br/>
        <div class="container-lg ">
    
          <div class="text-center ">
            <h2>Join a Team</h2>
            <p class="lead mt-4">Think you have what it takes to join one of our teams? <br/> Fill out the following form to sign-up for our next tryouts!</p>
          </div>
          <div class="row justify-content-center my-5">
            <div class="col-lg-6">
    
              <form name="bookAppointment" action="/confirmation">
                <label for="name" class="form-label fs-5">Name:</label>
                <div class="input-group mb-4">
                  <span class="input-group-text">
                    <i class="bi bi-person-fill text-secondary"></i>
                  </span>
                  <input type="text" class="form-control" placeholder="First Name" aria-label="FirstName" id="firstName" required/>
                  <input type="text" class="form-control" placeholder="Last Name" aria-label="LastName" id="lastName" required/>
                </div>
    
                <label for="email" class="form-label fs-5">Email and Phone Number:</label>
                <div class="input-group mb-4">
                  <span class="input-group-text">
                    <i class="bi bi-envelope-fill text-secondary"></i>
                  </span>
                  <input type="text" id="email" class="form-control" placeholder="e.g. nom@example.com" required/>
                  <span class="input-group-text">
                    <i class="bi bi-telephone-fill"></i>
                  </span>
                  <input type="text" id="phone" class="form-control fs-5" placeholder="e.g. 999-999-9999" required/>
                </div>
    
                <label for="serviceSelection" class="form-label fs-5">Which team would you like to join?</label>
                <div class="mb-4 input-group">
                  <span class="input-group-text">
                    <i class="bi bi-controller"></i>
                  </span>
                  <select class="form-select" id="serviceSelection" required>
                    <option value="select" disabled selected>Choose a Team</option>
                    <option value="examen">Dota 2</option>
                    <option value="nettoyage">League of Legends</option>
                    <option value="extraction">Overwatch</option>
                    <option value="blanchiment">Valorant</option>
                    <option value="canalRadiculaire">Super Smash Bros Ultimate</option>
                    <option value="implants">Rocket League</option>
                  </select>
                </div>
    
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" class="fs-5">Why do you think you would make a good member of the team?</label>
                  <textarea class="form-control" id="goodMember" rows="3" required></textarea>
                </div>
                <div class="my-4 text-center">
                  <button id="submitApp" type="submit" class="btn-lg btn-secondary" style={{backgroundColor: "#ff8906", color: "black"}}>Submit</button>
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
   
  export default JoinEn;