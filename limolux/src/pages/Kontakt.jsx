import ContactImage from "../assets/images/logo.png";
export default function Kontakt() {
  return (
    <main>
      <div className="contact-wrapper">
        <div className="contact">
          <img src={ContactImage} alt="#" />
        </div>
        <div className="contact-footer">
          <p>+381 (0)64 XXX 000</p>
          <p>office@limoluxbelgrade.com</p>
          <p>LIMOLUX DOO BEOGRAD SAVSKI NASIP 7</p>
        </div>
      </div>
    </main>
  );
}
