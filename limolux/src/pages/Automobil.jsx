import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Automobil() {
  let { voziloid } = useParams();
  const [vozilo, setVozilo] = useState(null);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/06bde23e-0c06-4bc1-8a9c-ebc4dba4ecea")
      .then((response) => {
        const voziloData = response.data.vozila.find(
          (elem) => elem.id === parseInt(voziloid)
        );
        setVozilo(voziloData);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  }, [voziloid]);

  if (loader && !vozilo) {
    return <p className="loader">Učitavanje...</p>;
  }

  return (
    <main>
      <div className="automobil-wrapper">
        <div className="automobil-card">
          <div className="automobil-image">
            <img src={vozilo.src} alt="#" />
          </div>
          <div className="automobil-content">
            <img src="../src/assets/images/logo.png" alt="" />
            <p>Marka: {vozilo.marka}</p>
            <p>Model: {vozilo.model}</p>
            <p>Godište: {vozilo.godiste}</p>
            <p>Cena po danu: {vozilo.cena} &#8364;</p>
            <p>Pozovite nas: +381 (0)64 XXX 000</p>
            <button>Rezervišite</button>
            <span onClick={() => navigate(-1)}>X</span>
          </div>
        </div>
      </div>
    </main>
  );
}