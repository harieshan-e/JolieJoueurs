const Contact = () => {
    return ( 
        <section id="contact" class="bg-light mt-5 ">
          <br/>       <br/>      <br/>
    <div class="text-center ">
      <h2>Contactez-Nous</h2>
    </div>
    <div class="container-lg my-5">
      <div class="row">

        <div class="card text-dark   col-lg-12 mb-3" style={{backgroundColor: "#ff8906"}}>
          <div class="card-header fw-bold fs-4">Telephone + Courriel</div>
          <div class="card-body">
            <p class="card-text fs-5">Veuillez nous contacter pour toute question.</p>
            <span class="input-group-text my-4 fs-5">
              <i class="bi bi-envelope-fill"></i>
              &nbsp;joliejoeurs@gmail.com
            </span>
            <span class="input-group-text my-4 fs-5">
              <i class="bi bi-telephone-fill"></i>
              &nbsp;(613)-932-3242
            </span>
          </div>
        </div>

        <div class="card text-dark   col-lg-12 mb-3" style={{backgroundColor: "#ff8906"}}>
          <div class="card-header fw-bold fs-4">Location</div>
          <div class="card-body">
            <p class="card-text fs-5">Rendez-nous visite à notre bureau.</p>
            <span class="input-group-text my-4 fs-5">
              <i class="bi bi-geo-alt-fill"></i>
              &nbsp;1331 Rue Gamer, Ottawa, ON
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}
 
export default Contact;