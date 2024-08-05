const Footer = () => {
  return (
    <footer>
      <div className="w-[888.22px] h-[246.70px] relative mx-auto my-12">
        <div className="absolute h-24 w-96">
          <div className="left-[0.22px] top-0 absolute text-neutral-600 text-4xl font-normal font-['Baloo'] leading-10 tracking-tight">
            Etwas abonnieren *
          </div>
          <div className="left-[51.47px] top-[50.18px] absolute text-neutral-600 text-4xl font-normal font-['Baloo'] leading-10 tracking-tight">
            Unser Newsletter
          </div>
        </div>
        <div>
          <input
            className="w-[508px] h-16 left-[379.77px] top-[157.02px] absolute bg-white shadow pl-16"
            placeholder="youremail123@gmail.com"
          />
          <div className="" />
          <div className="w-11 h-11 left-[391.47px] top-[167.16px] absolute bg-stone-50" />
          <div className="left-[400px] top-[175px] absolute text-gray-500 text-xl font-semibold font-['Nunito Sans']">
            ✉️
          </div>
          <button className="w-40 h-14 left-[728px] top-[191.33px] absolute bg-neutral-500 text-white text-sm font-semibold rounded-none">
            ABONNIEREN
          </button>
        </div>
        <div className="w-60 left-[51.47px] top-[149.22px] absolute text-neutral-600 text-sm font-normal leading-snug tracking-tight text-left">
          Get weekly update about our product on your email, no spam guaranteed
          we promise ✌️
        </div>
      </div>
      <div className="bg-[#043c29] text-white ">
        <div className="container grid grid-cols-4 gap-16 p-16 mx-auto">
          <div className="mt-5">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
            </p>
            <div className="flex mt-4 space-x-6">
              <a href="#">
                <img src="/public/social.svg" alt="" className="" />
              </a>
              <a href="#">
                <img
                  src="/public/lucideyoutube.svg"
                  alt="YouTube"
                  className=""
                />
              </a>
              <a href="#">
                <img
                  src="/public/mdiinstagram.svg"
                  alt="Instagram"
                  className=""
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Um</h3>
            <ul>
              <li>
                <a href="#">Kontaktiere Uns</a>
              </li>
              <li>
                <a href="#">Über Uns</a>
              </li>
              <li>
                <a href="#">Karriere</a>
              </li>
              <li>
                <a href="#">Unternehmensinformationen</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Hilfe</h3>
            <ul>
              <li>
                <a href="#">Unsere Produzenten</a>
              </li>
              <li>
                <a href="#">Zahlung</a>
              </li>
              <li>
                <a href="#">Versand</a>
              </li>
              <li>
                <a href="#">Stornierung & Rückgabe</a>
              </li>
              <li>
                <a href="#">Verstoß Melden</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">politik</h3>
            <ul>
              <li>
                <a href="#">Rücknahmegarantie</a>
              </li>
              <li>
                <a href="#">Nutzungsbedingungen</a>
              </li>
              <li>
                <a href="#">Sicherheit</a>
              </li>
              <li>
                <a href="#">Privatsphäre</a>
              </li>
              <li>
                <a href="#">Seitenverzeichnis</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#062e20] py-4 text-white">
        <div className="container flex items-center justify-between px-4 mx-auto">
          <p>2023 hood.de, Inc.</p>
          <img
            src="public/icons-payment-11@2x.png"
            alt="MasterCard"
            className="w-56"
          />
          <a href="#" className="text-white">
            Scroll to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
