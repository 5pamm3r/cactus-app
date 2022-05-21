import "./ButtonNav.css";

function ButtonNav() {
  return (
    <nav className="Nav__container">
      <div className="Indoor__back Img__back">
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-cactus-flowers-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
          alt=""
        />
        <span>Indoor</span>
      </div>
      <div className="Outdoor__back Img__back">
        <img src="./../../../Images/cactus2.png" alt="asdf" /> <span>Outdoor</span>
        <img src="../../Images/cactus2.png" alt="qwer" />
      </div>
      <div className="Flower__back Img__back">
        <img src="https://img.icons8.com/ios/100/26e07f/pollen.png" alt="" />{" "}
        <span>Flower</span>
      </div>
    </nav>
  );
}

export { ButtonNav };
