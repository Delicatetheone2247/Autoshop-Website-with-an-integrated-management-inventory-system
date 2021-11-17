import Footer from "./Footer";
import Header from "./Header";

export default function kontakt() {
  return (
    <div>
      <Header />

      <div class="col-md-6">
        <div class="kontaktinfo">
          <h2>Kontakt Info</h2>
        </div>
        <address>
          <b>ZN Autocenter Aps</b>
          <p>Semdeland 1C </p>
          <p>2600 Glostrup </p>
          <p>CVR 32311563 </p>
          <p>
            <div class="ZN">
              <a
                href="https://www.google.dk/maps/place/ZN+Autocenter/@55.677368,12.3847071,17z/data=!3m1!4b1!4m5!3m4!1s0x465251de17096127:0xa257f93ef91a0293!8m2!3d55.677365!4d12.3869011"
                title="Klik her for rtuevejledning"
              >
                Find vej med Google Maps
              </a>
            </div>
          </p>
        </address>
      </div>

      <div class="row1">
        <p>
          Telefon:
          <a href="tel: 32 13 71 75"> 32 13 71 75</a>
        </p>
        <p>
          E-mail:
          <a href="mailto:info@znautocenter.dk"> info@znautocenter.dk</a>
        </p>
      </div>

      <div id="row2">
        <div class="column">
          <h2> Åbningstider </h2>

          <p> Mandag - Fredag: 08:00 - 17:00</p>
          <p>Lørdag: 10:00 - 14:00</p>
          <p>Søndag: Lukket</p>
          <p>Helligdage: Lukket</p>
        </div>
      </div>

      <div id="Container">
        <div class="row">
          <div class="col-md">
            <div class="content">
              <h2> Kontakt Os </h2>

              <p>
                <input type="text" placeholder="Dit Navn"></input>
              </p>
              <p>
                <input type="text" placeholder="Din email"></input>
              </p>
              <p>
                <input type="text" placeholder="Din besked"></input>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
